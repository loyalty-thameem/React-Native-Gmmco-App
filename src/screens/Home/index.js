import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    //LOCALSTORAGE GETITEMS HERE
    const [user, setUser] = React.useState([])

    const getUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("user");
            const currentUser = JSON.parse(savedUser);
            console.log(currentUser);
            //GET USER VALUE (PUSHED) TO USER STATE
            setUser(oldArray => [...oldArray, currentUser]);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        //called getItems 
        getUser();
        return () => backHandler.remove();
    }, []);



    return (
        <View>
            <Text> {"HomeScreen"} </Text>
            {
                user.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.userPhoneNumber}</Text>
                            <Text>{item.userPanNumber}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})