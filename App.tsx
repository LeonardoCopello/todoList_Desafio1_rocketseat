import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import Home from "@screens/Home";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";



export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded && <Home /> }
    </ThemeProvider>
  );
}
