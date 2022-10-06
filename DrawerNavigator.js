import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeStackNavigator from './StackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
      <Drawer.Navigator drawerContent={(props) => DrawerContent(props)} >
        <Drawer.Screen name="HomeStack" component={StackNavigator} />
      </Drawer.Navigator>
    );
  }

export default DrawerNavigator

const styles = StyleSheet.create({})