import { View, Text, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import PostListItem from '@/components/PostListItem'
import PostReplyInput from '@/components/PostReplyInput'
import { FlatList } from 'react-native'

const getPostById = async (id: string) => {
  const { data } = await supabase
    .from('posts')
    .select('*, user:profiles(*)')
    .eq('id', id)
    .single()
    .throwOnError()

  return data
}

export default function PostDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostById(id),
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  console.log(JSON.stringify(data, null, 2))

  return (
    <View className='flex-1'>
      <FlatList
        data={[]}
        renderItem={({ item }) => <PostListItem post={item} />}
        ListHeaderComponent={<PostListItem post={data} />}
      />
      <PostReplyInput postId={id} />
    </View>
  )
}
