import { View, Text, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Tables } from '@/types/database.types'
import { Link } from 'expo-router'

// Initialize the relativeTime plugin
dayjs.extend(relativeTime)

type PostWithUserAndReplies = Tables<'posts'> & {
  user: Tables<'profiles'>
  replies: {
    count: number
  }[]
}

export default function PostListItem({
  post,
}: {
  post: PostWithUserAndReplies
}) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable className='flex-row p-4 border-b border-gray-200'>
        {/* User Avatar */}
        <Image
          source={{ uri: post.user.avatar_url ?? undefined }}
          className='w-12 h-12 rounded-full'
        />

        {/* Post Content */}
        <View className='flex-1 ml-3'>
          {/* User Info */}
          <View className='flex-row items-center gap-2'>
            <Text className='font-bold text-gray-900'>
              {post.user.username}
            </Text>
            <Text className='text-gray-500 text-sm'>
              {dayjs(post.created_at).fromNow()}
            </Text>
          </View>

          {/* Post Text */}
          <Text className='mt-1 text-gray-900'>{post.content}</Text>

          {/* Post Actions */}
          <View className='flex-row mt-3 gap-4'>
            <Pressable className='flex-row items-center'>
              <Ionicons name='heart-outline' size={20} color='gray' />
              <Text className='ml-0.5 text-gray-500'>0</Text>
            </Pressable>
            <Pressable className='flex-row items-center'>
              <Ionicons name='chatbubble-outline' size={20} color='gray' />
              <Text className='ml-0.5 text-gray-500'>
                {post?.replies[0]?.count || 0}
              </Text>
            </Pressable>

            <Pressable className='flex-row items-center'>
              <Ionicons name='repeat-outline' size={20} color='gray' />
              <Text className='ml-0.5 text-gray-500'>0</Text>
            </Pressable>

            <Pressable className='flex-row items-center'>
              <Ionicons name='paper-plane-outline' size={20} color='gray' />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}
