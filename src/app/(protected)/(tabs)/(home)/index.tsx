import { ActivityIndicator, FlatList, Text } from 'react-native'
import PostListItem from '@/components/PostListItem'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '@/services/postsService'

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
