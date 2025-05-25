import { supabase } from '@/lib/supabase'
import { TablesInsert } from '@/types/database.types'

type PostInput = TablesInsert<'posts'>

export const fetchPosts = async () => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*), replies:posts(count)')
    .order('created_at', { ascending: false })
    .throwOnError()

  console.log(JSON.stringify(data, null, 2))
  return data
}

export const createPost = async (newPost: PostInput) => {
  const { data } = await supabase
    .from('posts')
    .insert(newPost)
    .select('*')
    .throwOnError()

  return data
}

export const getPostById = async (id: string) => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*), replies:posts(count)')
    .eq('id', id)
    .single()
    .throwOnError()

  return data
}

export const getPostsReplies = async (id: string) => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*), replies:posts(count)')
    .eq('parent_id', id)
    .throwOnError()

  return data
}
