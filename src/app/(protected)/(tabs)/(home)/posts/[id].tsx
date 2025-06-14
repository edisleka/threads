import { View, Text, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import PostListItem from '@/components/PostListItem'
import PostReplyInput from '@/components/PostReplyInput'
import { FlatList } from 'react-native'
import { getPostById, getPostsReplies } from '@/services/postsService'
import PostListDetails from '@/components/PostListDetails'

export default function PostDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
    staleTime: 1000 * 60 * 5,
  })

  const { data: parent } = useQuery({
    queryKey: ['posts', post?.parent_id],
    queryFn: () => getPostById(post?.parent_id || ''),
    enabled: !!post?.parent_id,
  })

  const { data: replies } = useQuery({
    queryKey: ['posts', id, 'replies'],
    queryFn: () => getPostsReplies(id),
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  // console.log(JSON.stringify(post, null, 2))

  return (
    <View className='flex-1'>
      <FlatList
        data={replies || []}
        renderItem={({ item }) => <PostListItem post={item} />}
        ListHeaderComponent={
          <>
            <PostListDetails post={post} />
            <Text className='text-lg font-bold p-4'>Replies</Text>
          </>
        }
      />
      <PostReplyInput postId={id} />
    </View>
  )
}
