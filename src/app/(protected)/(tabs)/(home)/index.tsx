import { ActivityIndicator, FlatList, Text } from 'react-native'
import PostListItem from '@/components/PostListItem'
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .order('created_at', { ascending: false })
    .throwOnError()

  return data
}

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  )
}
