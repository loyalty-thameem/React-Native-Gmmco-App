import React, { useEffect, useState } from 'react'
import { Alert, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation: { navigate } }) => {
    const [phone, onChangePhone] = React.useState("");
    const [pan, onChangePan] = React.useState("");
    const [pass, onChangePass] = React.useState("");

    const [checked, setChecked] = React.useState(false);
    console.log('state checked', checked)
    const [focus, setFocus] = useState({
        style1: false,
        style2: false,
        style3: false,
    });
    const customStyle = focus.style1 ? styles.passwordContainerActive : styles.passwordContainer;
    const customStyle2 = focus.style2 ? styles.inputBoxContainer1Acitve : styles.inputBoxContainer1;
    const customStyle3 = focus.style3 ? styles.inputBoxContainer2Acitve : styles.inputBoxContainer2;
    //    LOCALSTORAGE FOR SET USERPHONE AND USERPAN...
    // const value = {
    //     userPhoneNumber: phone,
    //     userPanNumber: pan
    // }
    // const storeUser = async () => {
    //     try {
    //       await AsyncStorage.setItem("user", JSON.stringify(value));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //    LOCALSTORAGE FOR GET USERPHONE AND USERPAN...
    const [user, setUser] = React.useState([]);
    // console.log('Login Stored User Details ', user[0].userMobileNumber);
    const getUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem('users');
            const currentUser = JSON.parse(savedUser);
            console.log('Login localStorage items are ', currentUser);
            setUser(oldArray => [...oldArray, currentUser]);

        } catch (error) {
            console.log('Error', error);
        }
    }
    React.useEffect(() => {
        getUser();
    }, []);
    //loginValidate
    const loginValidate = async () => {
        if (phone.length === 0) {
            Alert.alert('Please enter phone number');
        }
        else if (pan.length === 0) {
            Alert.alert('Please enter pan number');
        }
        else if (checked && pass.length === 0) {
            Alert.alert('Please enter password number');
        }
        // else if (checked === true) {
        // console.log('thank you');
        //LOCALSTORAGE PASSED TO HOME SCREEN
        // storeUser();
        // navigate('Home');
        // }
        else if (checked === false) {
            navigate('Otp');
        }
        else if (checked === true && phone === user[0].userMobileNumber && pan === user[0].userPanNumber && pass === user[0].userPassword) {
            navigate('Home');
            Alert.alert('thank you');
        }
        else {
            Alert.alert('Your login details invalid');
            //LOCALSTORAGE PASSED TO OTP SCREEN
            // storeUser();
            // navigate('Otp');

        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../assets/images/brand-logo.png')} />
                    </View>
                    <View style={styles.containerShadow}>
                        <View style={styles.curveContainer}>
                            <View style={styles.firstLabelContainer}>
                                <Text style={styles.label1}>Login</Text>
                                <Text style={styles.label2}>Please fill the credentials</Text>
                            </View>
                            <View style={customStyle2}>
                                <Icon name="phone" size={25} color={focus.style2 ? '#FCBA13' : '#A5A5A5'} style={styles.firstIcon} />
                                <TextInput
                                    style={styles.phoneInput}
                                    onChangeText={
                                        (phoneTextValue) => {
                                            console.log("phoneTextValue", phoneTextValue);
                                            // if(phoneTextValue === )

                                            onChangePhone(phoneTextValue.replace(/[^0-9]/g, ''))
                                        }
                                    }
                                    value={phone}
                                    placeholder="ENTER PHONE NUMBER"
                                    keyboardType="numeric"
                                    placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                                    //  underlineColorAndroid="transparent"
                                    onFocus={() => setFocus({ style2: !false })}
                                    maxLength={10}
                                />
                            </View>
                            <View style={customStyle3}>
                                <Icon name="id-badge" size={27} color={focus.style3 ? '#FCBA13' : '#A5A5A5'} style={styles.firstIcon2} />

                                <TextInput
                                    style={styles.panInput}
                                    onChangeText={
                                        (panTextValue) => {
                                            onChangePan(panTextValue.replace(/[^0-9]/g, ''))
                                        }
                                    }
                                    value={pan}
                                    placeholder="ENTER PAN NUMBER"
                                    keyboardType="numeric"
                                    placeholderTextColor={focus.style3 ? '#FCBA13' : '#A5A5A5'}
                                    onFocus={() => setFocus({ style3: !false })}

                                />
                            </View>
                            <TouchableOpacity style={styles.forgetPasswordContainer}
                                onPress={() => {
                                    navigate('ForgetPassword')
                                }}>
                                <Text style={styles.forgetPassword}>{"Forget Password?"}</Text>
                            </TouchableOpacity>
                            <View style={styles.checkBoxSplitContainer}>
                                <View style={styles.checkBoxContainer1}>
                                    <BouncyCheckbox
                                        size={25}
                                        fillColor="#F0AD04"
                                        unfillColor="black"
                                        iconStyle={{ borderColor: 'red', color: 'black' }}
                                        innerIconStyle={{ borderWidth: 2, color: 'black' }}
                                        checkIconImageSource={
                                            require('../../assets/images/checkicon.png')
                                        }
                                        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                                        isChecked={checked}
                                        disableBuiltInState
                                        onPress={(firstCheck) => {
                                            setChecked(!checked)
                                            console.log("111", !checked);

                                        }}
                                    />

                                    <Text style={styles.checkBoxlabel1}>{'I HAVE A PASSWORD'}</Text>
                                </View>
                                <View style={styles.checkBoxContainer2}>

                                    <BouncyCheckbox
                                        size={25}
                                        fillColor="#F0AD04"
                                        unfillColor="black"
                                        iconStyle={{ borderColor: 'red', color: 'black' }}
                                        innerIconStyle={{ borderWidth: 2, color: 'black' }}
                                        checkIconImageSource={
                                            require('../../assets/images/checkicon.png')
                                        }
                                        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                                        isChecked={!checked}
                                        disableBuiltInState
                                        onPress={(secondCheck) => {
                                            setChecked(!checked)
                                            console.log("222", !checked);
                                        }}
                                    />
                                    <Text style={styles.checkBoxlabel2}>{"OTP BY SMS"}</Text>
                                </View>
                            </View>
                            {
                                checked &&
                                <View style={customStyle}>
                                    <Icon name="lock" size={25} color={focus.style1 ? '#FCBA13' : '#A5A5A5'} style={styles.passwordIcon} />
                                    <TextInput
                                        style={styles.passwordInput}
                                        onChangeText={
                                            (passwordTextValue) => {
                                                onChangePass(passwordTextValue)
                                            }
                                        }
                                        value={pass}
                                        placeholder="ENTER YOUR PASSWORD"
                                        placeholderTextColor={focus.style1 ? '#FCBA13' : '#A5A5A5'}
                                        onFocus={() => setFocus({ style1: !false })}
                                        secureTextEntry={true}
                                    />
                                </View>

                            }

                            <TouchableOpacity
                                style={styles.loginContainer}
                                onPress={() => loginValidate()}
                            >
                                <Text style={styles.loginlabel}>Login</Text>
                            </TouchableOpacity>
                            <View style={styles.registerAccountContainer}>
                                <Text style={styles.registerLabel}>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => navigate('Register')}>
                                    <Text style={styles.registerLabel1}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.shadowTop}><Text></Text></View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCBA13',
        alignItems: "center",
        justifyContent: 'center',

    },
    containerShadow: {
        marginTop: 70,
        zIndex: -1,
    },
    shadowTop: {
        backgroundColor: '#BB8807',
        width: '90%',
        position: 'absolute',
        top: 91,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex: -1,
        //  elevation:3
        height: 10
    },
    logoContainer: {
        top: 90
    },
    curveContainer: {
        backgroundColor: '#000103',
        flex: 1,
        borderTopStartRadius: 45,
        borderTopEndRadius: 45,
        paddingTop: 70,
        width: '100%',
        paddingLeft: 20,


    },
    firstLabelContainer: {
        flexDirection: 'column',

    },
    label1: {
        fontFamily: 'Univers 67 Condensed',
        color: '#FCBA13',
        fontWeight: '700',
        fontSize: 24,
    },
    label2: {
        fontFamily: "Univers 47 Condensed Light",
        fontSize: 18,
        fontWeight: "300",
        color: '#FFFFFF',
        marginTop: 10,
        fontStyle: 'normal',
        letterSpacing: 0.4
    },
    inputBoxContainer1: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,
        marginBottom: 30


    },
    inputBoxContainer1Acitve: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: "#191B1D",
        borderColor: '#FCBA13',
        borderWidth: 1.2,
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,
        marginBottom: 30


    },
    firstIcon: {
        marginHorizontal: 15

    },
    inputBoxContainer2: {
        flexDirection: 'row',
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5

    },
    inputBoxContainer2Acitve: {
        flexDirection: 'row',
        backgroundColor: "#191B1D",
        borderColor: '#FCBA13',
        borderWidth: 1.2,
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,

    },
    firstIcon2: {
        marginHorizontal: 15


    },
    phoneInput: {
        height: 40,
        backgroundColor: "#191B1D",
        paddingLeft: 8,
        flexGrow: 1,
        margin: 1.3,
        borderRadius: 5,
        letterSpacing: 2,
        color: '#FCBA13',

    },
    panInput: {
        height: 40,
        backgroundColor: "#191B1D",
        paddingLeft: 8,
        flexGrow: 1,
        margin: 1.3,
        borderRadius: 5,
        letterSpacing: 2,
        color: '#FCBA13',

    },
    passwordInput: {
        height: 40,
        backgroundColor: "#191B1D",
        paddingLeft: 8,
        flexGrow: 1,
        margin: 1.3,
        borderRadius: 5,
        letterSpacing: 2,
        color: '#FCBA13',


    },
    forgetPasswordContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    forgetPassword: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0.1,
        color: "#B8994A",
        marginHorizontal: 25,
        marginTop: 5,
    },
    checkBoxSplitContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between',
    },
    checkBoxContainer1: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: "center",
    },
    checkBox1: {
        marginRight: 5
    },
    checkBoxlabel1: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 22,
        color: "#FCBA13",

    },
    checkBoxContainer2: {
        flexDirection: 'row',
        marginRight: 20,
        alignItems: "center",

    },
    checkBox2: {
        marginRight: 5

    },
    checkBoxlabel2: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 22,
        color: "#FCBA13",
    },
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,
        marginTop: 10


    },
    passwordContainerActive: {
        flexDirection: 'row',
        backgroundColor: "#191B1D",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 5,
        borderColor: '#FCBA13',
        borderWidth: 1.2,
        marginTop: 10



    },
    passwordIcon: {
        marginHorizontal: 18
    },
    loginContainer: {
        backgroundColor: "#FCBA13",
        borderRadius: 5,
        position: "absolute",
        width: '100%',
        height: 50,
        left: 17,
        top: 460,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginlabel: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        color: "#000103"
    },
    registerAccountContainer: {
        position: 'absolute',
        top: 560,
        left: 21,
        width: 370,
    },
    registerLabel: {
        textAlign: 'center',
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        color: "#FFFFFF",
        marginBottom: 10
    },
    registerLabel1: {
        textAlign: 'center',
        color: "#FCBA13",
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal'

    },
    textInputFocus: {
        backgroundColor: 'red',
        borderColor: '#FCBA13',
        borderWidth: 1,
    }
})