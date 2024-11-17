import { StatusBar, Text } from 'react-native';

import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { ThemeProvider } from 'styled-components/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from './src/routes';

import theme from './src/theme';


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
        {fontsLoaded ? <Routes /> : <Text>As fontes nao carregaram</Text>}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}