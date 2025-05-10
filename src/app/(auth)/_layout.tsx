import { useAuth } from '@/providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect href='/(protected)/' />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' />
      <Stack.Screen name='signup' />
    </Stack>
  )
}
