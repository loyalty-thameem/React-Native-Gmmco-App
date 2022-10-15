import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useRef } from 'react'
// I DON'T KNOW BELOW FLATLIST. IT'S FROM GESTURE.
import { FlatList} from 'react-native-gesture-handler'
import HelpFirstData from '../../LocalData/HelpFirstData'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import OpenScreen from './TopTabNavigator/Open'
// import ClosedScreen from './TopTabNavigator/Closed'
// import InprogressScreen from './TopTabNavigator/Inprogress'
import OpenScreen from '../../TopTabNavigator/Open'
import InprogressScreen from '../../TopTabNavigator/Inprogress'
import ClosedScreen from '../../TopTabNavigator/Closed'
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.flatlistViewRenderData}>
      <Image
        source={item.image}
        style={styles.helpDataImage}
      />
      <Text style={styles.helpDataText}>{item.model}</Text>
    </TouchableOpacity>
  )
}

const HelpScreen = () => {
  const TopTab = createMaterialTopTabNavigator();
  const dummyDataNumbers = [3, 4, 12];
  

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.selectEquipmentContainer}>
          <View style={styles.selectEquipmentTextContainer}>
            <Text style={styles.equipmentText}>SELECT AN EQUIPMENT TO
            </Text>
            <Text style={styles.equipmentColorText}>RAISE SERVICE REQUEST</Text>
          </View>
          <FlatList
            data={HelpFirstData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatlistContainer}
            horizontal
            contentContainerStyle={styles.list}
          
          />
          <TouchableOpacity
            style={styles.lessthanImageContainer}
            onPress={()=>{
              alert("It's not moving")
            }}
          >
            <Image source={require('../../../assets/images/lessthan.png')}
              style={styles.lessthanImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TopTab.Navigator
        initialRouteName='Open'
        screenOptions={
          {
            tabBarStyle: {
              backgroundColor: "#171717",
              height:43
            },
            tabBarIndicatorStyle: {
              backgroundColor: '#FCBA13'
            },
          }
        }
      >
        <TopTab.Screen
          name={'Open'}
          component={OpenScreen}
          options={
            {
              tabBarLabel: ({focused,color}) => {
                return (
                  <View style={[styles.labelcontainer,{opacity:focused?null:0.4}]}>
                    <Image source={require('../../../assets/images/green.png')} />
                    <Text style={styles.labelText}>{`Open (${dummyDataNumbers[0]})`}</Text>
                  </View>
                )
              },
            }
          }
        />
        <TopTab.Screen 
        name={'Inprogress'} 
        component={InprogressScreen}
        options={
          {
            tabBarLabel: ({focused,color}) => {
              return (
                <View style={[styles.labelcontainer,{opacity:focused?null:0.4}]}>
                  <Image source={require('../../../assets/images/orange.png')} />
                  <Text style={styles.labelText}>{`Inprogress (${dummyDataNumbers[1]})`}</Text>
                </View>
              )
            },
          }
        }
         />
        <TopTab.Screen 
        name={'Closed'}
         component={ClosedScreen}
         options={
          {
            tabBarLabel: ({focused,color}) => {
              return (
                <View style={[styles.labelcontainer,{opacity:focused?null:0.4}]}>
                  <Image source={require('../../../assets/images/red.png')} />
                  <Text style={styles.labelText}>{`Closed (${dummyDataNumbers[2]})`}</Text>
                </View>
              )
            },
          }
        }
         />
      </TopTab.Navigator>
    </View >

  )
}

export default HelpScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000103',
    flex: 1,
  },
  mainContainer: {

  },
  selectEquipmentContainer: {
    backgroundColor: '#000103',
  },
  selectEquipmentTextContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  equipmentText: {
    fontFamily: 'Univers 67 Condensed',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  equipmentColorText: {
    fontFamily: 'Univers 67 Condensed',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 20,
    color: "#FCBA13",
    paddingLeft: 5
  },
  equipmentScrollView: {
  },

  middleTabViewContainer: {
  },
  flatlistContainer: {
    marginRight: 28,
  },
  list: {
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5
  },
  flatlistViewRenderData: {
    margin: 5,
    backgroundColor: '#191B1D',
    borderRadius: 5,
  },
  helpDataImage: {
    borderRadius: 5,
  },
  helpDataText: {
    textAlign: "center",
    fontFamily: 'Arial',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    color: "#FFFFFF",
    marginVertical: 5,
  },
  lessthanImageContainer: {
    position: 'absolute',
    right: 5,
    bottom: 55
  },
  lessthanImage: {
  },
  labelcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    marginHorizontal: 10,
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 17,
    color: "#FFFFFF",
    textTransform:'uppercase',
  },
  firstLabelcontainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstLabelText:{
    marginHorizontal: 10,
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 17,
    color: "#FFFFFF",
    textTransform:'uppercase',
  },
})