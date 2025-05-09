import { View, Text, Image, Pressable } from 'react-native'
import { Post } from '@/types/types'
import { Ionicons } from '@expo/vector-icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Initialize the relativeTime plugin
dayjs.extend(relativeTime)

export default function PostListItem({ post }: { post: Post }) {
  return (
    <Pressable className='flex-row p-4 border-b border-gray-200'>
      {/* User Avatar */}
      <Image
        source={{ uri: post.user.image }}
        className='w-12 h-12 rounded-full'
      />

      {/* Post Content */}
      <View className='flex-1 ml-3'>
        {/* User Info */}
        <View className='flex-row items-center gap-2'>
          <Text className='font-bold text-gray-900'>{post.user.username}</Text>
          <Text className='text-gray-500 text-sm'>
            {dayjs(post.createdAt).fromNow()}
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
            <Text className='ml-0.5 text-gray-500'>{post.replies.length}</Text>
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
  )
}
