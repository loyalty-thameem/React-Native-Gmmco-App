import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
const ChatScreen = () => {
  const [style, setStyle] = React.useState(false);
  const customizedStyle = !style ? styles.typingTextContainer : styles.typingTextFocusContainer;
  const [userText, setUserText] = React.useState([])
  console.log('UserText', userText)

  return (
    <View style={styles.container}>
      {/* <StatusBar
                //Animated true is take time to animated. we can check the slowly updated the status bar.
                animated={true}
                backgroundColor="#FCBA13"
                barStyle={'dark-content'}
            /> */}
      <View style={styles.chatWithUsContainer}>
        <Text style={styles.chatWithUsText}>{"Chat with us"}</Text>
      </View>
      <ScrollView>
        <View style={styles.defaultMessageContainer}>
          <View style={styles.defaultImageContainer}>
            <Image
              source={require('./../../../assets/images/chat_default_icon.png')}
              style={styles.defaultImage} />
          </View>
          <View style={styles.defaultTextContainer}>
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageText}>{"Good Morning!  How can I assist you?"}</Text>
            </View>
            <Text style={styles.timeMessageText}>{"Today 03:24 PM"}</Text>
          </View>
        </View>
        <View style={styles.userTextContainer}>
          <View style={styles.userTextMainContainer}>
            <Text style={styles.userText}>{"I have an issue with my escavator front left axle and vehicle drags to the left."}</Text>
          </View>
          <Text style={styles.timeUserText}>{"Today 03:25 PM"}</Text>
        </View>

        <View style={styles.defaultMessageContainer}>
          <View style={styles.defaultImageContainer}>
            <Image
              source={require('./../../../assets/images/chat_default_icon.png')}
              style={styles.defaultImage} />
          </View>
          <View style={styles.defaultTextContainer}>
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageText}>{"Should we arrange for an executive now?"}</Text>
            </View>
            <Text style={styles.timeMessageText}>{"Today 03:24 PM"}</Text>
          </View>

        </View>
      </ScrollView>
      <View style={customizedStyle}>
        <TextInput
          style={styles.inputText}
          placeholder={'Type your message here'}
          placeholderTextColor={'#B6B8BB'}
          multiline
          value={userText}
          onChangeText={(text) => {
            console.log(text)
            const values = text;
            setUserText(values)
          }}
          onFocus={() => {
            setStyle(!false)
          }}
        />
        <TouchableOpacity style={styles.sendButtonContainer}
          onPress={() => {
            setUserText('')
          }}>
          <Image
            source={require('./../../../assets/images/send_button_icon.png')}
            style={styles.sendMessageImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000103',
    flex: 1,
    paddingBottom: 55,
  },
  chatWithUsContainer: {
    // backgroundColor: 'red',
    margin: 20,
  },
  chatWithUsText: {
    fontFamily: 'Univers 67 Condensed',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    textTransform: 'uppercase',
    color: '#FFFFFF',

  },
  defaultMessageContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    flex: 0.14,
    marginTop: 10,

  },
  defaultImageContainer: {
    justifyContent: 'flex-end'
  },
  defaultImage: {

  },
  defaultTextContainer: {
    // backgroundColor: 'green',
    flex: 1,
    marginRight: 40,
  },
  messageTextContainer: {
    backgroundColor: '#171717',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingHorizontal: 4,
    paddingVertical: 10

  },
  messageText: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: '#E4E5E7',

  },
  timeMessageText: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 13,
    color: '#85919A',
    marginTop: 3

  },

  userTextContainer: {
    flex: 0.13,
    marginLeft: 90,
    marginVertical: 20,

  },
  userTextMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#FFEFC8',
    borderRadius: 7,
    paddingVertical: 15
  },
  userText: {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#31322D',

  },
  timeUserText: {
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 14,
    color: '#85919A',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 2,

  },
  typingTextContainer: {
    backgroundColor: '#000103',
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    // marginLeft: 0,
  },
  typingTextFocusContainer: {
    backgroundColor: '#FCBA13',
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    // marginLeft: 10,
    borderWidth: 1.7,
    borderColor: '#FCBA13',
    borderRadius: 5,
  },
  inputText: {
    backgroundColor: '#171717',
    flex: 0.9,
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#B6B8BB',
    paddingLeft: 20,
    fontWeight: '700'
  },
  sendButtonContainer: {
    backgroundColor: '#FCBA13',
    flex: .12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 7,
  },
  sendMessageImage: {

  }
})