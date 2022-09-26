import { Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from 'react-native-vector-icons/Ionicons';
const RegisterScreen = ({ navigation: { navigate } }) => {
  //CheckBox
  const [checkedBox, setCheckedBox] = React.useState(false);
  //Style for TEXTINPUT...
  const [focus, setFocus] = React.useState({
    style1: false,
    style2: false,
    style3: false,
    style4: false,
    style5: false,
    style6: false,
    style7: false,
    style8: false,
  });
  //Style of TextInput container
  const customStyle1 = focus.style1 ? styles.textInputContainer1Active : styles.textInputContainer1;
  const customStyle2 = focus.style2 ? styles.textInputContainer2Active : styles.textInputContainer2;
  const customStyle3 = focus.style3 ? styles.textInputContainer3Active : styles.textInputContainer3;
  const customStyle4 = focus.style4 ? styles.textInputContainer4Active : styles.textInputContainer4;
  const customStyle5 = focus.style5 ? styles.textInputContainer5Active : styles.textInputContainer5;
  const customStyle6 = focus.style6 ? styles.textInputContainer6Active : styles.textInputContainer6;
  const customStyle7 = focus.style7 ? styles.textInputContainer7Active : styles.textInputContainer7;
  const customStyle8 = focus.style8 ? styles.textInputContainer8Active : styles.textInputContainer8;
  //Content data for TEXTINPUT...
  const [userName,setUserName] =React.useState('');
  const [companyName,setCompanyName] =React.useState('');
  const [address,setAddress] =React.useState('');
  const [pinCode,setPinCode] =React.useState('');
  const [mobileNumber,setMobileNumber] =React.useState('');
  const [panNumber,setPanNumber] =React.useState('');
  const [password,setPassword] =React.useState('');
  const [confirmPassword,setConfirmPassword] =React.useState('');
  // I CAN'T VALUE THE OBJECT VALUE PROPERLY FOR VALIDATE
  // const [textInput, setTextInput] = React.useState({
  //   userName: '',
  //   companyName: '',
  //   address: '',
  //   pinCode: '',
  //   mobileNumber: '',
  //   panNumber: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  //registerValidation
  const registerValidation = () => {
    if (userName === '') {
      Alert.alert('Please enter username')
    }
    else if(companyName === '') {

      Alert.alert('Please enter company name')
    }
    else if (address === '') {
      Alert.alert('Please enter address')
    }
    else if (pinCode === '') {
      Alert.alert('Please enter pincode')
    }
    else if (panNumber === '') {
      Alert.alert('Please enter pan number')
    }
    else if (mobileNumber === '') {
      Alert.alert('Please enter mobile number')
    }
    else if (password === '') {
      Alert.alert('Please enter password')
    }
    else if (confirmPassword === '') {
      Alert.alert('Please enter confirm password')
    }
    else if (password !== confirmPassword) {
      Alert.alert('Your passsword mismatched')
    }
    else if (checkedBox !== true) {
      Alert.alert('Please accept th terms and conditions')
    }
    else if (userName && companyName && address && pinCode && mobileNumber && panNumber && password && checkedBox && confirmPassword && password === confirmPassword) {
      Alert.alert('Thank you')
      navigate('Home');
    }
    else {
      Alert.alert('Your detail invalid');
    }

  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View style={styles.curveContainer}>
          <View style={styles.textInputMainContainer}>
            <View style={customStyle1}>
              <Ionicons
                name="person-outline"
                size={25}
                color={focus.style1 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon1} />
              <TextInput
                style={styles.userNameInput}
                value={userName}
                onChangeText={(userNameValue) => {
                  setUserName( userNameValue )
                }}
                placeholderTextColor={focus.style1 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'USERNAME'}
                onFocus={() => setFocus({ style1: !false })}
              />
            </View>
            <View style={customStyle2}>
              <Ionicons
                name="business-outline"
                size={25}
                color={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon3} />
              <TextInput
                value={companyName}
                onChangeText={(companyNameValue) => {
                  setCompanyName(companyNameValue)
                }}
                placeholderTextColor={focus.style2 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'COMPANY NAME'}
                style={styles.companyNameInput}
                onFocus={() => setFocus({ style2: !false })}
              />
            </View>
            <View style={customStyle3}>
              <Ionicons
                name="location"
                size={25} color={focus.style3 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon3} />
              <TextInput
                value={address}
                onChangeText={(addressValue) => {
                  setAddress(addressValue )
                }}
                placeholderTextColor={focus.style3 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'ADDRESS'}
                style={styles.addressInput}
                onFocus={() => setFocus({ style3: !false })}
              />
            </View>
            <View style={customStyle4}>
              <Ionicons
                name="barcode-outline"
                size={25} color={focus.style4 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon4} />
              <TextInput
                value={pinCode}
                keyboardType={'numeric'}
                onChangeText={(pincodeValue) => {
                  setPinCode(pincodeValue.replace(/[^0-9]/g, ''))
                }}
                placeholderTextColor={focus.style4 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'PINCODE'}
                style={styles.pincodeInput}
                onFocus={() => {
                  setFocus({ style4: !false })
                }}
              />
            </View>
            <View style={customStyle5}>
              <Ionicons
                name="call-outline"
                size={25}
                color={focus.style5 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon5} />
              <TextInput
                value={mobileNumber}
                keyboardType='numeric'
                onChangeText={(mobileNumberValue) => {
                  setMobileNumber(mobileNumberValue.replace(/[^0-9]/g, '') )
                }}
                placeholderTextColor={focus.style5 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'MOBILE NUMBER'}
                style={styles.mobileNumberInput}
                onFocus={() => {
                  setFocus({ style5: !false })
                }}
              />
            </View>
            <View style={customStyle6}>
              <Ionicons
                name="calculator-outline"
                size={25} color={focus.style6 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon6} />
              <TextInput
                value={panNumber}
                keyboardType='numeric'
                onChangeText={(panNumberValue) => {
                  setPanNumber(panNumberValue.replace(/[^0-9]/g, ''))
                }}
                placeholderTextColor={focus.style6 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'ENTER PAN NUMBER'}
                style={styles.panNumberInput}
                onFocus={() => setFocus({ style6: !false })}
              />
            </View>
            <View style={customStyle7}>
              <Ionicons
                name="lock-closed-outline"
                size={25} color={focus.style7 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon7} />
              <TextInput
                value={password}
                onChangeText={(passwordValue) => {
                  setPassword(passwordValue)
                }}
                placeholderTextColor={focus.style7 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'PASSWORD'}
                style={styles.passwordInput}
                secureTextEntry={true}
                onFocus={() => setFocus({ style7: !false })}
              />
            </View>
            <View style={customStyle8}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                color={focus.style8 ? '#FCBA13' : '#A5A5A5'}
                style={styles.icon8} />
              <TextInput
                value={confirmPassword}
                onChangeText={(confirmPassValue) => {
                  setConfirmPassword(confirmPassValue)
                }}
                placeholderTextColor={focus.style8 ? '#FCBA13' : '#A5A5A5'}
                placeholder={'CONFIRM PASSWORD'}
                style={styles.confirmPasswordInput}
                secureTextEntry={true}
                onFocus={() => setFocus({ style8: !false })}
              />
            </View>
            <View style={styles.termAndConditionContainer}>
              <View style={styles.checkBoxContainer1}>
                <BouncyCheckbox
                  // size={25}
                  size={30}
                  fillColor="#F0AD04"
                  unfillColor="black"
                  iconStyle={{ borderColor: 'red', color: 'black' }}
                  innerIconStyle={{ borderWidth: 1.3, color: 'black' }}
                  checkIconImageSource={
                    require('../../assets/images/checkicon.png')
                  }
                  textStyle={{ fontFamily: 'JosefinSans-Regular' }}
                  isChecked={checkedBox}
                  disableBuiltInState
                  onPress={(firstCheck) => {
                    setCheckedBox(!checkedBox)
                    console.log("firstCheck", !checkedBox);

                  }}
                />
              </View>
              <View style={styles.termAndConditionTextContainer}>
                <Text style={styles.termAndConditionText1}>{"I accept "}</Text>
                <Text style={styles.termAndConditionText2}>{"Terms & Condition"}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.registerButton}
              onPress={() => {
                registerValidation()
              }}>
              <Text style={styles.registerButtonText}>{"Register"}</Text>
            </TouchableOpacity>
            <View style={styles.accountTypeTextContainer}>
              <Text style={styles.accountTypeText}>{"Already have an account?"}</Text>
              <TouchableOpacity
                onPress={() => navigate('Login')}>
                <Text style={styles.loginText}>{"Login"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCBA13',
  },
  curveContainer: {
    flex: 1,
    marginTop: 30,
    width: '100%',
    backgroundColor: '#000103',
    justifyContent: 'flex-end',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20
  },
  textInputMainContainer: {
    marginHorizontal: 15,
    flex: 0.96,
    justifyContent: 'space-around',
  },
  textInputContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer1Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon1: {
    marginHorizontal: 15,
  },
  userNameInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },
  textInputContainer2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer2Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon2: {
    backgroundColor: 'yellow',
    marginHorizontal: 15,
  },
  companyNameInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },

  textInputContainer3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer3Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon3: {
    marginHorizontal: 15,
  },
  addressInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },

  textInputContainer4: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer4Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon4: {
    marginHorizontal: 15,
  },
  pincodeInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },

  textInputContainer5: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer5Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon5: {
    marginHorizontal: 15,
  },
  mobileNumberInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },
  textInputContainer6: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer6Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon6: {
    marginHorizontal: 15,
  },
  panNumberInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },
  textInputContainer7: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer7Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon7: {
    marginHorizontal: 15,
  },
  passwordInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },
  textInputContainer8: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
  },
  textInputContainer8Active: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    backgroundColor: '#191B1D',
    borderWidth: 1.3,
    borderColor: '#FCBA13',
  },
  icon8: {
    marginHorizontal: 15,
  },
  confirmPasswordInput: {
    flexGrow: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    fontSize: 17,
    color: '#FCBA13',
  },
  termAndConditionContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  checkBoxContainer1: {
    marginLeft: 10
  },
  termAndConditionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termAndConditionText1: {
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  termAndConditionText2: {
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#FCBA13",
    borderBottomWidth: 2,
    borderBottomColor: "#FCBA13",
  },
  registerButton: {
    backgroundColor: '#FCBA13',
    height: 43,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15
  },
  registerButtonText: {
    fontFamily: 'Univers 67 Condensed',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    color: "#000103",
  },
  accountTypeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 11
  },
  accountTypeText: {
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  loginText: {
    marginLeft: 5,
    fontFamily: 'Univers 57 Condensed',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 22,
    color: "#FCBA13",
  },
})