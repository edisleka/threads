import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SignupScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Please enter email and password')
      return
    }

    try {
      setIsLoading(true)
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) Alert.alert(error.message)
      if (!session)
        Alert.alert('Please check your inbox for email verification!')
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className='flex-1 bg-white px-8 py-12 justify-center'>
      <View className='space-y-8'>
        <View className='space-y-3 mb-6'>
          <Text className='text-4xl font-bold text-gray-900'>
            Create an account
          </Text>
          <Text className='text-gray-500 text-lg'>Sign up to your account</Text>
        </View>

        <View className='space-y-6'>
          <View className='space-y-3'>
            <Text className='text-gray-700 font-medium text-base'>Email</Text>
            <TextInput
              className='w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-blue-500 text-base'
              placeholder='Enter your email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              editable={!isLoading}
            />
          </View>

          <View className='space-y-3'>
            <Text className='text-gray-700 font-medium text-base'>
              Password
            </Text>
            <TextInput
              className='w-full px-5 py-4 border border-gray-300 rounded-xl focus:border-blue-500 text-base'
              placeholder='Enter your password'
              value={password}
              onChangeText={setPassword}
              // secureTextEntry
              editable={!isLoading}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSignup}
          className='w-full bg-blue-500 py-4 rounded-xl mt-4'
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color='white' />
          ) : (
            <Text className='text-white text-center font-semibold text-lg'>
              Sign Up
            </Text>
          )}
        </TouchableOpacity>

        <View className='flex-row justify-center space-x-2 mt-8'>
          <Text className='text-gray-500 text-base'>
            Don't have an account?
          </Text>
          <Link href='/login' asChild>
            <Pressable disabled={isLoading}>
              <Text className='text-blue-500 font-semibold text-base'>
                Sign In
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  )
}
