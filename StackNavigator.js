
import { Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import LoginScreen from './src/screens/Login'
import OtpScreen from './src/screens/Otp'
import ForgetPasswordScreen from './src/screens/ForgetPassword'
import HomeScreen from './src/screens/Home'
import RegisterScreen from './src/screens/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './src/screens/BottomNavigator'
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
    // <Stack.Navigator initialRouteName='Home'>
     <Stack.Navigator initialRouteName='Bottom'> 
      <Stack.Screen name='Bottom' component={BottomNavigator}
        options={{ headerShown: false }} 
       />
      <Stack.Screen name={'Login'} component={LoginScreen}
        options={{ headerShown: false }} />
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
          headerShown: false,
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
  )
}

export default StackNavigator

const styles = StyleSheet.create({})