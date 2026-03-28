import { createClient } from '@/lib/supabase/server'
import type { BoardUpdateDTO } from '@/types/board'

// ────── BOARD UPDATES ──────

export async function getBoardUpdate(id: string): Promise<BoardUpdateDTO | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('board_updates')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) {
    return getDemoUpdate(id)
  }

  return data.update_data as BoardUpdateDTO
}

export async function setBoardUpdate(update: BoardUpdateDTO, userId?: string): Promise<void> {
  if (!userId) {
    await setDemoUpdate(update.id, update)
    return
  }

  const supabase = await createClient()
  const row = {
    id: update.id,
    user_id: userId,
    company_name: update.companyName,
    period: update.period,
    update_data: update,
    updated_at: new Date().toISOString(),
  }

  await supabase.from('board_updates').upsert(row)
}

export async function getUserBoardUpdates(userId: string): Promise<BoardUpdateDTO[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('board_updates')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (!data) return []
  return data.map(d => d.update_data as BoardUpdateDTO)
}

export async function deleteBoardUpdate(id: string): Promise<void> {
  const supabase = await createClient()
  await supabase.from('board_updates').delete().eq('id', id)
}

// ────── DEMO STORAGE (anonymous, 2hr TTL) ──────

async function setDemoUpdate(id: string, data: unknown): Promise<void> {
  const supabase = await createClient()
  await supabase.from('demo_sessions').upsert({
    id,
    data,
    type: 'board_update',
    expires_at: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
  })
}

async function getDemoUpdate(id: string): Promise<BoardUpdateDTO | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('demo_sessions')
    .select('*')
    .eq('id', id)
    .eq('type', 'board_update')
    .gt('expires_at', new Date().toISOString())
    .single()

  if (!data) return null
  return data.data as BoardUpdateDTO
}
