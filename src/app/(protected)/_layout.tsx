import { Stack, Redirect } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider'
export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Redirect href='/login' />
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='new'
        options={{
          presentation: 'modal',
          // animation: 'slide_from_bottom',
          title: 'New Thread',
        }}
      />
    </Stack>
  )
}
