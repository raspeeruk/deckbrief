import { NextRequest } from 'next/server'
import { runBoardPipeline } from '@/lib/engine/board-pipeline'
import { setBoardUpdate } from '@/lib/board-store'
import { createClient } from '@/lib/supabase/server'
import type { BoardUpdateFormInput } from '@/types/board'

export async function POST(req: NextRequest) {
  try {
    const input = await req.json() as BoardUpdateFormInput

    if (!input.companyName || !input.period || !input.mrr) {
      return new Response(
        JSON.stringify({ error: 'companyName, period, and mrr are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get current user (optional — demo mode if no auth)
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const update = await runBoardPipeline(input, (progress) => {
            send({ type: 'progress', ...progress })
          })

          await setBoardUpdate(update, user?.id)

          send({ type: 'progress', step: 'Complete', progress: 100 })
          send({ type: 'complete', updateId: update.id })
        } catch (error) {
          send({ type: 'error', error: error instanceof Error ? error.message : 'Processing failed' })
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Processing failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
