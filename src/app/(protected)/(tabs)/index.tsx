import { ActivityIndicator, FlatList, Text } from 'react-native'
import PostListItem from '@/components/PostListItem'
import { Link } from 'expo-router'
import { supabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .throwOnError()

  return data
}

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) {
    return <ActivityIndicator size='large' color='red' />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link href='/new' className='text-blue-500 p-4 text-center text-3xl'>
            New Post
          </Link>
        </>
      )}
    />
  )
}
