import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useAuth } from '@/providers/AuthProvider'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'
import { createPost } from '@/services/postsService'
import Entypo from '@expo/vector-icons/Entypo'
import * as ImagePicker from 'expo-image-picker'

export default function NewPost() {
  const [text, setText] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const { user } = useAuth()

  const queryClient = useQueryClient()

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => createPost({ content: text, user_id: user!.id }),
    onSuccess: () => {
      setText('')
      router.replace('/')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <SafeAreaView edges={['bottom']} className='p-4 flex-1'>
      <KeyboardAvoidingView
        className='flex-1'
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
      >
        <Text className='text-black text-lg font-bold'>username</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder='What is on your mind?'
          placeholderTextColor='gray'
          className='text-black text-lg'
          multiline
          numberOfLines={4}
        />

        {image && (
          <Image
            source={{ uri: image }}
            className='w-1/2 aspect-square rounded-lg my-4'
          />
        )}

        {error && <Text className='text-red-500'>{error.message}</Text>}

        <View>
          <Entypo onPress={pickImage} name='images' size={20} color='black' />
        </View>

        <View className='mt-auto'>
          <Pressable onPress={() => mutate()} disabled={isPending}>
            <Text className=' p-3 px-6 self-end rounded-full bg-black text-white'>
              Post
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
