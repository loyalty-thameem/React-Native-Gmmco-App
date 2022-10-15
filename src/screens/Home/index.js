import { Alert, BackHandler, Button, DrawerLayoutAndroid, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeData from '../LocalData/HomeData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import NavigationView from '../Drawer/NavigationView';

const HomeScreen = ({ navigation: { navigate } }) => {
    //LOCALSTORAGE GETITEMS HERE
    const [user, setUser] = React.useState([]);

    const [searching, setSearching] = React.useState();
    const [borderStyle, setBorderStyle] = React.useState(false);
    const focusStyle = borderStyle ? styles.searchingPartsContainerFocus : styles.searchingPartsContainer;
    //MAIN CONTAINER ITEMS IN FOCUS STYLE VIEW
    const [mainBorderstyle, setMainBorderStyle] = React.useState(false);
    console.log('mainBorderStyle', mainBorderstyle)
    const customizedFocusedStyle = mainBorderstyle ? styles.flatlistItemsContainerFocus:styles.flatlistItemsContainer;
    //MODEL VIEW ON PAYMENT
    const refRBSheet = useRef();

    const getUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem('users');
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
    //FLATLIST RENDERITEMS=====>
    const renderItem = ({ item }) => {
        console.log('Home screen data items from flatlist', item.id)
        return (
            <TouchableOpacity style={styles.flatlistItemsContainer}
                onPress={() => {
                    if (item.id === 1) {
                        navigate('OrderParts')
                    }
                    else if(item.id === 2){
                        navigate('MyFleet')

                    }
                    else if(item.id === 3){
                        navigate('MyPlan')
                    }
                    else if(item.id === 4){
                        navigate('Assistant')
                    }
                    else if(item.id === 5){
                        navigate('MyQuote')
                    }
                }
                    // setMainBorderStyle(true)
                    // Alert.alert(JSON.stringify(item.id))
                }
            >
                <View style={styles.flatlistImageAndTextContainer}>
                    <Image source={item.image} style={styles.flatlistImage} />
                    <Text style={styles.flatlistTitleText}>{item.title}</Text>
                    {
                        item.notification &&
                        <View style={styles.notificationFlatlistContainer}>
                            <Text style={styles.notificationText}>{item.notification}</Text>
                        </View>
                    }
                </View>
            </TouchableOpacity>
        )
    }
    //AFTER LONG TIME(3hrs) SOLVED ISSUE. I USED BELOW WAY... CONT1
    const [user2, setUser2] = React.useState([]);
    // console.log('User2',user2);
    React.useEffect(() => {
        let users = user.map((item, index) => {
            console.log('thameem  ansari ', item);
            // return (
            setUser2(item.userMobileNumber)
            // )
        });
        console.log('useeffect', users);
        // MUST PASS DEPENDENCY ARRAY...
    }, [user])

    const drawer = useRef(null);


    return (

        <View style={styles.container}>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={270}
                renderNavigationView={NavigationView}
            >
                <StatusBar
                    //Animated true is take time to animated. we can check the slowly updated the status bar.
                    animated={true}
                    backgroundColor="#000103"
                    barStyle={'light-content'}
                />
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <>
                            <View style={styles.customizedHeaderContainer}>
                                <View style={styles.headerBackgroundImageContainer}>
                                    <Image
                                        source={require('../../assets/images/header-background.png')}
                                        style={styles.headerBackgroundImage} />
                                </View>

                                <View style={styles.header}>
                                    <View style={styles.iconAndTextHeader}>
                                        <TouchableOpacity style={styles.groupMenuIconContainer}
                                            onPress={() => drawer.current.openDrawer()}
                                        >
                                            <Image
                                                source={require('../../assets/images/group-menu.png')}
                                                style={styles.groupMenuLogo} />
                                        </TouchableOpacity>
                                        <View style={styles.headerTextContainer}>
                                            <Text style={styles.welcomeText}>{"Welcome!"}</Text>
                                            <Text style={styles.userNameText}>{"Bharanidharan"}</Text>
                                            {/* AFTER SOLVED ISSUE AND ADDED BELOW LINE FOR CLEARED ISSUE...CONT1 */}
                                            {/* <Text style={styles.userNameText}>{user2}</Text>  */}
                                            {/* {
                                            user.map((item, index) => {
                                                console.log('thameem  ansari ',item);
                                                return (
                                                    <View key={index}>
                                                        <Text style={styles.userNameText}>{item.userMobileNumber}</Text>
                                                    </View>
                                                )
                                            })
                                        } */}
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.purchaseIconContainer}>
                                        <Image
                                            source={require('../../assets/images/shopping-cart.png')}
                                            style={styles.purchaseIcon} />
                                        <View style={styles.notificationContainer}>
                                            <Text style={styles.notificationText}>{"3"}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={focusStyle}>
                                    <View style={styles.searchingPartsInputContainer}>
                                        <TextInput
                                            style={styles.searchingInput}
                                            value={searching}
                                            onChangeText={(searchingEvent) => {
                                                console.log(searchingEvent);
                                            }}
                                            placeholder={"Search Parts"}
                                            placeholderTextColor={"white"}
                                            onFocus={() => {
                                                setBorderStyle(true)
                                            }}
                                        />
                                    </View>
                                    <View style={styles.searchingIconContainer}>
                                        <Ionicons
                                            name="search"
                                            size={20}
                                            color={'black'}
                                            style={styles.searchingIcon} />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.mainContentOfContainer}>
                                <FlatList
                                    data={HomeData}
                                    // IT'S GOOD BUT IT'S OLD VERSION TO USE. I HAVE A WARN ISSUE...
                                    // contentContainerStyle={styles.list}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    // IT'S MAYBE NEW VERSION TO USE. I HAVEN'T NO WARN ISSUE...
                                    columnWrapperStyle={styles.list}
                                    numColumns={2}
                                />
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <View style={styles.bottomMainContainer}>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.reminderText}>{"Reminder"}</Text>
                        <View style={styles.firstBottomContainer}>
                            <Text style={styles.outstandingAmountText}>{"You have an outstanding amount of"}</Text>
                            <Text style={styles.amountText}>{"₹1,23,000"}</Text>
                            <TouchableOpacity style={styles.payNowButton}
                                onPress={() => refRBSheet.current.open()}
                            >
                                <Text style={styles.payNowText}>{"Pay Now"}</Text>

                            </TouchableOpacity>
                            <RBSheet
                                ref={refRBSheet}
                                closeOnDragDown={true}
                                closeOnPressMask={false}
                                customStyles={{
                                    wrapper: {
                                        backgroundColor: 'rgba(52, 52, 52, 0.8)'
                                    },
                                    draggableIcon: {
                                        backgroundColor: "white",
                                    },
                                    container: {
                                        backgroundColor: 'white',
                                        borderTopRightRadius: 30,
                                        borderTopLeftRadius: 30,
                                        height: 340,
                                    },
                                }}
                            >
                                {/* <MyOwnComponent /> */}
                                <View style={styles.ModelPopUpContainer}>
                                    <View style={styles.paymentImageContainer}>
                                        <Image
                                            source={require('../../assets/images/pending-payment.png')}
                                            style={styles.paymentLogo} />
                                    </View>
                                    <View style={styles.paymentTextContainer}>
                                        <Text style={styles.paymentText}>
                                            You have an outstanding of
                                            {/* <View style={styles.paymentTextRubeesContainer}> */}
                                            <Text style={styles.paymentTextRubees}>{" Rs 30,000 "}</Text>
                                            {/* </View> */}
                                            with its due date
                                            overdue, you need to make this payment to proceed
                                            for Ordering parts.
                                        </Text>
                                    </View>
                                    <View style={styles.laterAndPayNowContainer}>
                                        <TouchableOpacity style={styles.laterAndPayFirst}
                                            onPress={() => refRBSheet.current.close()}
                                        >
                                            <Text style={styles.laterText}>Later</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.laterAndPaySecond}>
                                            <Text style={styles.payText}>Pay Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </RBSheet>
                        </View>
                    </View>
                    <View style={styles.secondBottomContainer}>
                        <Text style={styles.orderEtaText}>{"Order ETA"}</Text>
                        <Text style={styles.dateText}>{"10 March 2021"}</Text>
                        <Text style={styles.invoiceNoLabelText}>{"Invoice No"}</Text>
                        <Text style={styles.invoiceNoText}>{"#GMM254549687"}</Text>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    customizedHeaderContainer: {

    },
    headerBackgroundImageContainer: {

    },
    headerBackgroundImage: {
    },
    header: {
        position: 'absolute',
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    iconAndTextHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 0.55,
    },
    groupMenuIconContainer: {
    },
    groupMenuLogo: {
        marginHorizontal: 20
    },
    headerTextContainer: {
        marginRight: 10,
        justifyContent: 'space-around',
        height: 50,
    },
    welcomeText: {
        fontFamily: 'Univers 67 Condensed',
        fonStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        color: "#FCBA13",
    },
    userNameText: {
        fontFamily: 'Univers 67 Condensed',
        fonStyle: "normal",
        fontWeight: "700",
        fontSize: 19,
        lineHeight: 20,
        color: "#FFFFFF",
    },
    purchaseIconContainer: {
        marginRight: 30,
    },
    purchaseIcon: {
    },
    notificationContainer: {
        backgroundColor: "#FCBA13",
        borderRadius: 50,
        position: 'absolute',
        left: 20,
        width: 22,
        bottom: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 15,
        color: "#000000"
    },
    searchingPartsContainer: {
        backgroundColor: '#282A2D',
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
    },
    searchingPartsContainerFocus: {
        backgroundColor: '#282A2D',
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 2,
        borderWidth: 1,
        borderColor: '#FCBA13',
    },
    searchingPartsInputContainer: {
        flexGrow: 1,
        height: 40,
    },
    searchingInput: {
        backgroundColor: '#282A2D',
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        paddingLeft: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: '#FFFFFF',
    },
    searchingIconContainer: {
        backgroundColor: '#FCBA13',
        width: 40,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 2
    },
    searchingIcon: {
    },
    mainContentOfContainer: {
        flex: 1,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 13,
        marginTop: 5
    },
    flatlistItemsContainer: {
        backgroundColor: '#191B1D',
        width: 170,
        // height: 135,
        height: 115,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    flatlistItemsContainerFocus: {
        backgroundColor: '#191B1D',
        width: 170,
        // height: 135,
        height: 115,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FCBA13',
    },
    flatlistImageAndTextContainer: {
        alignItems: 'center',
    },
    flatlistImage: {
        marginBottom: 16
    },
    flatlistTitleText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "#FFFFFF",
    },
    notificationFlatlistContainer: {
        backgroundColor: '#FCBA13',
        borderRadius: 20,
        position: 'absolute',
        left: 90,
        top: -5
    },
    notificationText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        color: "#000000",
    },
    bottomMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // marginTop: 0,
        marginBottom: 57,
        // backgroundColor:'green'
    },
    bottomContainer: {
    },
    reminderText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        color: "#FFFFFF",
        marginVertical: 10,
    },
    firstBottomContainer: {
        backgroundColor: '#FCBA13',
        borderRadius: 5,
        height: 120,
        justifyContent: 'center',
        alignContent: 'center',
    },
    outstandingAmountText: {
        fontFamily: 'Arial',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 13,
        textAlign: "center",
        color: "#000103",
        padding: 5
    },
    amountText: {
        fontFamily: 'Arial',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 18,
        textAlign: "center",
        color: "#000103",
    },
    payNowButton: {
        backgroundColor: '#CD1719',
        margin: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    payNowText: {
        fontFamily: 'Asap',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16,
        color: "#FFFFFF",
    },
    secondBottomContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 40,
        borderRadius: 5,
        height: 120,
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
    orderEtaText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "#888888",
        marginLeft: 10
    },
    dateText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        color: "#000103",
        marginLeft: 10
    },
    invoiceNoLabelText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: "#888888",
        marginLeft: 10
    },
    invoiceNoText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineheight: 20,
        color: "#000103",
        marginHorizontal: 10
    },
    ModelPopUpContainer: {
    },
    paymentImageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paymentLogo: {

    },
    paymentTextContainer: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    paymentText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14.18,
        lineHeight: 20,
        textAlign: "center",
        color: "#000103",
    },
    paymentTextRubeesContainer: {
    },
    paymentTextRubees: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        color: "#FCBA13",
    },
    laterAndPayNowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5,
    },
    laterAndPayFirst: {
        width: 140,
        height: 40,
        backgroundColor: '#020305',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    laterText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        color: "#FFFFFF",
    },
    laterAndPaySecond: {
        width: 140,
        height: 40,
        backgroundColor: '#FCBA13',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    payText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        color: "#31322D",
    },

})