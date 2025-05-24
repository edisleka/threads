import { View, TextInput } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
import { useAuth } from '@/providers/AuthProvider'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { createPost } from '@/services/postsService'

export default function PostReplyInput({ postId }: { postId: string }) {
  const [text, setText] = useState('')

  const { user } = useAuth()

  const queryClient = useQueryClient()

  const { mutate, isPending, error } = useMutation({
    mutationFn: () =>
      createPost({ content: text, user_id: user!.id, parent_id: postId }),
    onSuccess: (data) => {
      setText('')
      // TODO
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return (
    <View className='p-4'>
      <View className='bg-neutral-200 rounded-xl p-2 flex-row items-center'>
        <TextInput
          placeholder='Add a reply...'
          className='flex-1'
          value={text}
          onChangeText={setText}
          multiline={true}
        />
        <AntDesign
          onPress={() => mutate()}
          disabled={isPending || text.length === 0}
          name='pluscircleo'
          size={24}
          color={text.length === 0 ? 'gray' : 'black'}
        />
      </View>
    </View>
  )
}
