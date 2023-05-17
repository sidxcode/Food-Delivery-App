import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreens.js/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreens.js/LoginScreen';

export default function App() {
  return (
    // <WelcomeScreen />
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
