// import 'react-native-gesture-handler';
import { Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
// import LoginScreen from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import OtpScreen from './src/screens/Otp'
// import ForgetPasswordScreen from './src/screens/ForgetPassword'
// import HomeScreen from './src/screens/Home'
// import RegisterScreen from './src/screens/Register'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import StackNavigator from './StackNavigator'
// import DrawerNavigator from './DrawerNavigator'
// import DrawerNavigator from './DrawerNavigator'
{/* <HomeStackNavigator /> */ }

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
})