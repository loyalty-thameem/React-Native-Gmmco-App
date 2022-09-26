import { Alert, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgetPassword = () => {
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [focus, setFocus] = React.useState({
        style1: false,
        style2: false,
    });
    const customStyle1 = focus.style1 ? styles.firstTextInputBoxActive : styles.firstTextInputBox;
    const customStyle2 = focus.style2 ? styles.secondTextInputBoxActive : styles.secondTextInputBox;
    //ForgetPasswordValidation
    const ForgetPasswordValidation = () => {
        if (password.length === 0) {
            Alert.alert('Please enter password')
        }
        else if (confirmPassword.length === 0) {
            Alert.alert('Please enter confirm password')
        }
        else if (password === confirmPassword) {
            Alert.alert("Thank You");
        }
        else {
            Alert.alert('Your password is mismatched')
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}>
                <View style={styles.curveContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../assets/images/brand-logo.png')} />
                    </View>
                    <View style={styles.forgetPasswordTextContainer}>
                        <Text style={styles.ForgetPasswordText}>{'Forgot Password'}</Text>
                        <Text style={styles.emailMessageText}>{'Please enter your registered email to reset your password'}</Text>
                    </View>
                    <View style={styles.textInputBoxContainer}>
                        <View style={customStyle1}>
                            <Icon name="lock" size={25}
                                color={focus.style1 ? '#FCBA13' : '#A5A5A5'}
                                style={styles.passwordIcon} />
                            <TextInput
                                style={styles.firstInput}
                                value={password}
                                onChangeText={(password) => {
                                    setPassword(password)
                                }}
                                placeholderTextColor={focus.style1 ? '#FCBA13' : '#A5A5A5'}
                                placeholder='PASSWORD'
                                secureTextEntry={true}
                                onFocus={() => setFocus({ style1: !false })}
                            />
                        </View>
                        <View style={customStyle2}>
                            <Icon name="lock" size={25}
                                color={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                                style={styles.passwordIcon} />
                            <TextInput
                                style={styles.secondInput}
                                value={confirmPassword}
                                onChangeText={(confirmPass) => {
                                    setConfirmPassword(confirmPass);
                                }}
                                placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                                placeholder='CONFIRM PASSWORD'
                                secureTextEntry={true}
                                onFocus={() => setFocus({ style2: !false })}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => {
                            ForgetPasswordValidation()
                        }}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCBA13',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    curveContainer: {
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
    },
    logo: {
        borderRadius: 0,
    },
    forgetPasswordTextContainer: {
        flexDirection: 'column',
        flex: 0.22,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: -20,
        marginLeft: 20,

    },
    ForgetPasswordText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 29,
        color: "#FCBA13",
        marginBottom: 15,

    },
    emailMessageText: {
        fontFamily: 'Univers 47 Condensed Light',
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 18,
        lineHeight: 22,
        color: "#FFFFFF",

    },
    textInputBoxContainer: {
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    firstTextInputBox: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1.5,
        borderRadius: 5

    },
    firstTextInputBoxActive: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1.3,
        borderColor: '#FCBA13',
        borderRadius: 5

    },
    passwordIcon: {
        padding: 10,
        backgroundColor: '#191B1D',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },
    firstInput: {
        backgroundColor: "#191B1D",
        flexGrow: 1,
        paddingLeft: 10,
        letterSpacing: 2,
        color: '#FCBA13',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        fontSize: 16,
    },
    secondInput: {
        backgroundColor: "#191B1D",
        flexGrow: 1,
        paddingLeft: 10,
        letterSpacing: 2,
        color: '#FCBA13',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        fontSize: 16,

    },
    secondTextInputBox: {
        flexDirection: 'row',
        borderWidth: 1.5,


    },
    secondTextInputBoxActive: {
        backgroundColor: '#191B1D',
        flexDirection: 'row',
        borderWidth: 1.3,
        borderColor: '#FCBA13',
        borderRadius: 5

    },
    submitButton: {
        backgroundColor: '#FCBA13',
        flex: 0.092,
        marginHorizontal: 20,
        marginTop: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        color: "#000103",
    }
})