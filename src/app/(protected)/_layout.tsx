import { Stack } from 'expo-router'

export default function ProtectedLayout() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='new'
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          title: 'New Thread',
        }}
      />
    </Stack>
  )
}
