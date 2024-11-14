import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { ThemeProvider } from 'styled-components/native';

import { SignIn } from '@/screens/SignIn';
import { StatusBar, Text } from 'react-native';
import theme from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <SignIn /> : <Text>As fontes nao carregaram</Text>}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}