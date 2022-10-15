import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Home';
import HelpScreen from './Help';
import ChatScreen from './Chat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const BottomNavigator = ({ navigation: { goBack } }) => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarStyle: {
                        backgroundColor: '#313132',
                        flex: 1,
                        position: 'absolute',
                        height: '7.0%',
                        borderRadius: 50,
                        marginHorizontal: 10,
                    },
                    tabBarLabelStyle: {
                        // backgroundColor: 'green',
                        flex: 1,
                        position: 'absolute',
                        right: 20,
                        bottom: 10,
                        fontFamily: 'Univers 57 Condensed',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: 15,
                        lineHeight: 19,
                        textAlign: "center",
                        // color: "#FFFFFF",

                    },
                    tabBarActiveTintColor: '#FCBA13',
                    tabBarInactiveTintColor: '#FFFFFF',

                    headerLeft: ({ tintColor, pressColor, pressOpacity, labelVisible }) => (
                        <TouchableOpacity onPress={() => {
                            goBack();
                        }}>

                            <Image source={require('../../assets/images/left_menu_back_icon.png')}
                                style={styles.helpHeaderLeftImage}
                            />
                        </TouchableOpacity>

                    ),

                    headerTitle: () => (
                        <View style={
                            styles.helpHeaderImageContainer
                        }>
                            <Image source={require('../../assets/images/gmmco_assist_logo.png')}
                                style={
                                    styles.helpHeaderImage
                                }
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.helpHeaderRightContainer}
                            onPress={() => Alert.alert('3 Shipping items available')}>
                            <Image source={require('../../assets/images/shopping-cart.png')}
                                style={[styles.helpHeaderRightImage, {
                                    tintColor: 'black'
                                }]}
                            />
                            <View style={styles.helpHeaderRightImageTextContainer}>
                                <Text style={styles.helpHeaderRightImageText}>{"3"}</Text>
                            </View>
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: '#FCBA13',
                        height: 90,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        // borderColor:'#000103',
                    },
                    headerTitleAlign: 'center',
                    //Finally I got borderradius balance backgroundColor. Wow...
                    headerBackgroundContainerStyle: {
                        backgroundColor: '#000103'
                    }



                }
            }
        >
            {/* <Tab.Screen name='TopTabs' component={HelpScreen} */}
            <Tab.Screen name='Home' component={HomeScreen}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => (
                            // <MaterialCommunityIcons name="home" color={"#fff"} size={25} />
                            <Image source={require('../../assets/images/home_bottom.png')}
                                style={[styles.tabBarIconImageHome, {
                                    tintColor: color
                                }]}
                            />

                        )


                    }
                }
            />
            <Tab.Screen name='Help' component={HelpScreen}
                options={
                    {
                        // headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => (
                            <Image source={require('../../assets/images/help_bottom.png')}
                                style={[styles.tabBarIconImage,
                                {
                                    tintColor: color
                                }]}
                            />
                        ),

                        // headerLeft: ({ tintColor, pressColor, pressOpacity, labelVisible }) => (
                        //     <TouchableOpacity onPress={() => {
                        //         goBack();
                        //     }}>

                        //         <Image source={require('../../assets/images/left_menu_back_icon.png')}
                        //             style={styles.helpHeaderLeftImage}
                        //         />
                        //     </TouchableOpacity>

                        // ),

                        // headerTitle: () => (
                        //     <View style={
                        //         styles.helpHeaderImageContainer
                        //     }>
                        //         <Image source={require('../../assets/images/gmmco_assist_logo.png')}
                        //             style={
                        //                 styles.helpHeaderImage
                        //             }
                        //         />
                        //     </View>
                        // ),
                        // headerRight: () => (
                        //     <TouchableOpacity style={styles.helpHeaderRightContainer}
                        //         onPress={() => Alert.alert('3 Shipping items available')}>
                        //         <Image source={require('../../assets/images/shopping-cart.png')}
                        //             style={[styles.helpHeaderRightImage, {
                        //                 tintColor: 'black'
                        //             }]}
                        //         />
                        //         <View style={styles.helpHeaderRightImageTextContainer}>
                        //             <Text style={styles.helpHeaderRightImageText}>{"3"}</Text>
                        //         </View>
                        //     </TouchableOpacity>
                        // ),
                        // headerStyle: {
                        //     backgroundColor: '#FCBA13',
                        //     height: 90,
                        //     borderBottomLeftRadius: 20,
                        //     borderBottomRightRadius: 20,
                        //     // borderColor:'#000103',
                        // },
                        // headerTitleAlign: 'center',
                        // //Finally I got borderradius balance backgroundColor. Wow...
                        // headerBackgroundContainerStyle: {
                        //     backgroundColor: '#000103'
                        // }


                    }
                }
            />
            <Tab.Screen name='Chat' component={ChatScreen}
                options={
                    {
                        // headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => (
                            <Image source={require('../../assets/images/chat_bottom.png')}
                                style={[styles.tabBarIconImage, {
                                    tintColor: color
                                }]}
                            />
                        ),

                    }
                } />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    tabBarIconImage: {
        marginRight: 25
    },
    tabBarIconImageHome: {
        marginRight: 38
    },
    helpHeaderLeftImage: {
        // backgroundColor: 'red',
        margin: 20,
    },
    helpHeaderRightContainer: {
        // backgroundColor: 'yellow',
    },
    helpHeaderRightImage: {
        // backgroundColor: 'red',
        margin: 20,
    },
    helpHeaderRightImageTextContainer: {
        // backgroundColor:'green',
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1.3,
        position: 'absolute',
        right: 10,
        top: 11,


    },
    helpHeaderRightImageText: {
        textAlign: 'center',
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 18,
        color: "#000000",
    },
    helpHeaderImage: {

    },
    helpHeaderImageContainer: {
        // width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },


})