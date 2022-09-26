import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpScreen = () => {
    const [otpNumber, setOtpNumber] = React.useState({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
    });
    const [customeStyle, setCustomeStyle] = React.useState({
        styles1: false,
        styles2: false,
        styles3: false,
        styles4: false,
    });
    const customizedInputBoxStyle1 = customeStyle.styles1 ? styles.customeTextInputStyle : styles.input
    const customizedInputBoxStyle2 = customeStyle.styles2 ? styles.customeTextInputStyle : styles.input
    const customizedInputBoxStyle3 = customeStyle.styles3 ? styles.customeTextInputStyle : styles.input
    const customizedInputBoxStyle4 = customeStyle.styles4 ? styles.customeTextInputStyle : styles.input
    console.log('customizedInputBoxStyle1', customizedInputBoxStyle1);
    console.log('customeStyle', customeStyle.styles1);
    //LOCALSTORAGE GETITEMS FROM USER FOR PHONE NUMBER.
    const [userPhoneNumber, setUserPhoneNumber] = React.useState([]);
    const getUser = async () => {
        const savedUser = await AsyncStorage.getItem('user');
        const currentUser = JSON.parse(savedUser);
        console.log('currentUser detail is ', currentUser);
        //GET USER VALUE (PUSHED) TO USER STATE 
        // currenct user direct passed user phone number in the array
        setUserPhoneNumber(oldArray => [...oldArray, currentUser.userPhoneNumber]);
    }
    React.useEffect(() => {
        getUser();
    }, [])
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {/* <View style={styles.container}> */}
                <View style={styles.curveContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/brand-logo.png')} />
                    </View>
                    <View style={styles.otpTextContainer} >
                        <Text style={styles.otpVerificationText}>OTP Verification</Text>
                        <Text style={styles.otpVerificationSecurityText}>For the security of your account, please enter the security code</Text>
                        {/*usePhoneNumber getted the localstorage*/}
                        <Text style={styles.otpVerificationNumberText}>Enter OTP sent to +91 {userPhoneNumber}</Text>
                    </View>
                    <View style={styles.otpNumberText}>
                        <TextInput
                            value={otpNumber.otp1}
                            onChangeText={
                                (number1) => {
                                    setCustomeStyle({ styles1: true });
                                    setOtpNumber({ otp1: number1 })
                                }
                            }

                            style={customizedInputBoxStyle1}
                            keyboardType={'number-pad'}
                            maxLength={1}
                        //  placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                        />
                        <TextInput
                            value={otpNumber.otp2}
                            onChangeText={
                                (number2) => {
                                    setCustomeStyle({ styles2: !false });
                                    setOtpNumber({ otp2: number2 })
                                }
                            }
                            style={customizedInputBoxStyle2}
                            keyboardType={'number-pad'}
                            maxLength={1}
                        //  placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                        />
                        <TextInput
                            value={otpNumber.otp3}
                            onChangeText={
                                (number3) => {
                                    setCustomeStyle({ styles3: !false });
                                    setOtpNumber({ otp3: number3 })
                                }
                            }
                            style={customizedInputBoxStyle3}
                            keyboardType={'number-pad'}
                            maxLength={1}
                        //  placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                        />
                        <TextInput
                            value={otpNumber.otp4}
                            onChangeText={
                                (number4) => {
                                    setCustomeStyle({ styles4: !false });
                                    setOtpNumber({ otp4: number4 })
                                }
                            }
                            style={customizedInputBoxStyle4}
                            keyboardType={'number-pad'}
                            maxLength={1}
                        //  placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                        />
                    </View>
                    <View style={styles.finalContainer}>
                        <TouchableOpacity style={styles.verifyButton}>
                            <Text style={styles.verifyButtonText}>Verify</Text>
                        </TouchableOpacity>
                        <View style={styles.TwoLabelText}>
                            <Text style={styles.otpQuestionText}>Don't receive the OTP?</Text>
                            <Text style={styles.resendOtpText}>Resend OTP</Text>
                        </View>
                    </View>
                </View>
                {/* </View> */}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCBA13',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    curveContainer: {
        // backgroundColor: 'white',
        flex: 1,
        marginTop: 40,
        width: '100%',
        backgroundColor: '#000103',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.35,
        // backgroundColor: "green"

    },
    logo: {
        borderRadius: 0,
    },
    otpTextContainer: {
        flexDirection: 'column',
        flex: 0.25,
        // backgroundColor: 'red',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginTop: -20,
        marginLeft: 20
    },
    otpVerificationText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 29,
        color: "#FCBA13",
    },
    otpVerificationSecurityText: {
        fontFamily: 'Univers 47 Condensed Light',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 16,
        lineHeight: 22,
        color: "#FFFFFF",
    },
    otpVerificationNumberText: {
        fontFamily: 'Univers 47 Condensed Light',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 16,
        lineHeight: 22,
        color: "#FFFFFF",
    },
    otpNumberText: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        flex: 0.15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#191B1D',
        // padding: 10,
        borderRadius: 5,
        color: "#FCBA13",
        fontSize: 22,
        fontWeight: '900',
        paddingLeft: 18,
        width: 47,
    },
    customeTextInputStyle: {
        backgroundColor: '#191B1D',
        borderRadius: 5,
        color: "#FCBA13",
        fontSize: 22,
        fontWeight: '900',
        paddingLeft: 18,
        width: 47,
        borderWidth: 1.5,
        borderColor: '#FCBA13'
    },

    finalContainer: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyButton: {
        backgroundColor: '#FCBA13',
        height: 45,
        width: '90%',
        margin: 10,
        borderRadius: 5,
    },
    verifyButtonText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        textAlign: "center",
        color: "#000103",
        marginVertical: 10
    },
    TwoLabelText: {
        // backgroundColor: 'red',
        marginTop: 30,

    },
    otpQuestionText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        color: "#FFFFFF"
    },
    resendOtpText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 40,
        color: "#FCBA13",
        textAlign: 'center'
    },
})