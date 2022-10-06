import { Button, FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import SideMenuData from '../../LocalData/SideMenuData';
import { TouchableOpacity } from 'react-native-gesture-handler';
//FLATLIST RENDERITEMS
const renderItems = ({ item }) => {
console.log(item)
const backgroundColor = [1,3,4,5].includes(item.id)  ?'':'#FCBA13';
    return (
        <View style={styles.flatlistContainer}>
            <TouchableOpacity style={[styles.mainContainer,{backgroundColor:backgroundColor}]} onPress={()=>{console.log(item.title)}}>
                <View
                    style={[styles.flatlistImage,{backgroundColor:backgroundColor}]}
                >
                    <Image
                        source={item.image}
                    />
                </View>
                <Text style={styles.flatlistText}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const NavigationView = () => {

    return (
       
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/images/profile.png')}
                        style={styles.imagelogo}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>BHARANIDHARAN</Text>
                    <Text style={styles.customerText}>Customer</Text>
                </View>
            </View>
            <FlatList
                data={SideMenuData}
                renderItem={renderItems}
                keyExtractor={item => item.id}
                // columnWrapperStyle={styles.list}
                // numColumns={1}
                contentContainerStyle={styles.list}

            />
        </View>
    );
}

export default NavigationView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000103',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileContainer: {
        flexDirection: "row",
        marginVertical: 30,
    },
    imageContainer: {
        // backgroundColor: "#FCBA13"
    },
    imagelogo: {

    },
    textContainer: {
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    nameText: {
        fontFamily: 'Asap',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 21,
        color: "#FFFFFF",

    },
    customerText: {
        fontFamily: 'Asap',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 15,
        color: "#888686",

    },
    flatlistContainer: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
    },
    mainContainer: {
        // backgroundColor: '#FCBA13',
        flexDirection: 'row',
        // justifyContent:'space-around'
        height: 40,
        alignItems: 'center',

    },
    flatlistImage: {
        // backgroundColor: '#FCBA13',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlistText: {
        fontFamily: 'Asap',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 21,
        color: "#FFFFFF",
        marginRight: 5
    },
    list: {
        // backgroundColor: 'black',
        flex: 0.5,
        justifyContent: 'space-around'
    },
})