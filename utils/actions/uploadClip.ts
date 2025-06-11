import { createServerActionClient } from '@/lib/supabase'

export async function uploadClip(file: File, path: string) {
  const supabase = await createServerActionClient()
  const { data, error } = await supabase.storage
    .from('audioclips') // your bucket name
    .upload(path, file)
  if (error) throw error
  return data
}

