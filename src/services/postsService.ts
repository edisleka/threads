import { supabase } from '@/lib/supabase'
import { TablesInsert } from '@/types/database.types'

type PostInput = TablesInsert<'posts'>

export const createPost = async (newPost: PostInput) => {
  const { data } = await supabase
    .from('posts')
    .insert(newPost)
    .select('*')
    .throwOnError()

  return data
}
