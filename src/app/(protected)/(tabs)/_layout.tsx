import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

type TabBarIconProps = {
  size: number
  color: string
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='plus'
        options={{
          title: 'Plus',
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name='plus' size={size} color={color} />
          ),
        }}
        listeners={{
          tabPress: (e: any) => {
            e.preventDefault()
            router.push('/new')
          },
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notifications',
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name='bell' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name='user' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
