
import { Image, StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import LoginScreen from './src/screens/Login'
import OtpScreen from './src/screens/Otp'
import ForgetPasswordScreen from './src/screens/ForgetPassword'
import HomeScreen from './src/screens/Home'
import RegisterScreen from './src/screens/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './src/screens/BottomNavigator'
import TicketScreen from './src/screens/TopTabNavigator/Open/Ticket'
// import TicketScreen from './src/screens/CommanNavigator/Ticket'
// import TicketScreen from './src/screens/BottomNavigator/Help/TopTabNavigator/Open/Ticket'
import OrderPartsScreen from './src/screens/HomeScreenNavigator/OrderParts'
import MyFleetScreen from './src/screens/HomeScreenNavigator/MyFleet'
import MyPlanScreen from './src/screens/HomeScreenNavigator/MyPlan'
import AssistantScreen from './src/screens/HomeScreenNavigator/Assistant'
import MyQuoteScreen from './src/screens/HomeScreenNavigator/MyQuote'
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
    // <Stack.Navigator initialRouteName='Home'>
    <Stack.Navigator initialRouteName='MyFleet'>
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
      <Stack.Screen name={'OrderParts'} component={OrderPartsScreen}

      />
      <Stack.Screen name={'MyFleet'} component={MyFleetScreen}
        options={
          {
            headerTitle: 'MY FLEET',
            // headerBackButtonMenuEnabled:true
            // headerBackVisible:true,
            headerLeft: () => (
              <Image
                source={require('./src/assets/images/left_menu_back_icon.png')}
                style={{ marginRight: 10 }}
              />
            ),
            headerRight: ({ tintColor }) => (
              <View style={styles.headerRightContainer}>
                <Image
                  source={require('./src/assets/images/shopping-cart.png')}
                  style={{ tintColor: tintColor }}
                />
                <View style={styles.notificationContainer}>
                  <Text style={styles.notificationText}>{"3"}</Text>
                </View>
              </View>
            ),
            headerTitleStyle: {
              fontFamily: 'Univers 67 Condensed',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 20,
              lineHeight: 24,
              color: '#000103',
            },
            headerStyle: {
              backgroundColor: '#FCBA13',
            },
            headerShadowVisible: false,

          }
        }
      />
      <Stack.Screen name={'MyPlan'} component={MyPlanScreen}

      />
      <Stack.Screen name={'Assistant'} component={AssistantScreen}

      />
      <Stack.Screen name={'MyQuote'} component={MyQuoteScreen}

      />
      <Stack.Screen name={'Ticket'} component={TicketScreen}
      //  <Stack.Screen name={'Ticket'} component={TicketScreen}
      // options={{
      //   headerTintColor: 'black',
      //   headerShadowVisible: false,
      //   //  headerBackImageSource,
      //   headerStyle: {
      //     backgroundColor: '#FCBA13'
      //   },
      //   headerTitleStyle: {
      //     fontSize: 20,
      //     fontWeight: '700',
      //   },
      // }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({
  headerRightContainer: {
    // backgroundColor: 'red',
    marginHorizontal: 15,
    marginVertical: 25

  },
  notificationContainer: {
    backgroundColor: '#FCBA13',
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    position: 'absolute',
    right: 0,
    top: -12,
    right: -13,

  },
  notificationText: {
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Univers 67 Condensed',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    color: "#000000",
  },


})