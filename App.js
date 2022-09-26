import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OtpScreen from './src/screens/Otp'
import ForgetPasswordScreen from './src/screens/ForgetPassword'
import HomeScreen from './src/screens/Home'
import RegisterScreen from './src/screens/Register'
import Ionicons from 'react-native-vector-icons/Ionicons'
  

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name={'Login'} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={'Otp'} component={OtpScreen}
          options={{
            headerTintColor: 'black',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#FCBA13',
            },
            title: '',

          }}
        />
        <Stack.Screen name={'ForgetPassword'} component={ForgetPasswordScreen}
          options={{
            headerTintColor: 'black',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#FCBA13',
            },
            title: '',
          }} />
        <Stack.Screen name={'Home'} component={HomeScreen}
          options={{
            headerTintColor: 'black',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#FCBA13'
            },
            headerShown:false
          }}
        />
        <Stack.Screen name={'Register'} component={RegisterScreen}
          options={{
            headerTintColor: 'black',
            headerShadowVisible: false,
            //  headerBackImageSource,
            headerStyle: {
              backgroundColor: '#FCBA13'
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '700',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
})