import { Stack } from 'expo-router'
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#fff',
  },
}

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <Stack />
    </ThemeProvider>
  )
}
