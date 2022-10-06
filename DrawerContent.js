import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Login"
        onPress={() => props.navigation.navigate('Login')}
      />
      <DrawerItem
        label="Register"
        onPress={() => props.navigation.navigate('Register')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;


const styles = StyleSheet.create({})