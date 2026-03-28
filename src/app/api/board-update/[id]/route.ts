import { NextRequest } from 'next/server'
import { getBoardUpdate, setBoardUpdate } from '@/lib/board-store'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const update = await getBoardUpdate(id)
  if (!update) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }
  return new Response(JSON.stringify(update), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()

  if (body.id !== id) {
    return new Response(JSON.stringify({ error: 'ID mismatch' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  await setBoardUpdate(body, user?.id)

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
