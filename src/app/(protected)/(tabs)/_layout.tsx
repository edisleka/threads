import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

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
          tabBarIcon: ({ size, color }) => (
            <Feather name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <Feather name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notifications',
          tabBarIcon: ({ size, color }) => (
            <Feather name='bell' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Feather name='user' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
