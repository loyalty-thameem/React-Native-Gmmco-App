import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import MyFleetData from '../../LocalData/MyFleetData'

const MyFleetScreen = () => {
    const [searchValue, setSearchValue] = React.useState('');
    //FLATLIST DATA RENDER
    const renderIterm = ({ item }) => {
    const colorStyle = item.id===3 ?'#E51013':'#0ED662';

        return (
            <View style={styles.flatlistRenderContainer}>
                <View style={styles.flatlistMainContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={item.image}
                            style={styles.bulldozerImage}
                        />
                        <View style={styles.connectedContainer}>
                            <View style={[styles.checkImageRound,{backgroundColor:colorStyle}]}>
                                <Image
                                    source={item.id === 3 ? item.notCheckImage : item.checkImage}
                                    style={styles.checkImage}
                                />
                            </View>
                            <Text style={[styles.connectedText,{color:colorStyle}]}>{item.id ===3 ?item.notConnected:item.connected}</Text>
                        </View>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.modelText}>{item.model}</Text>
                        <Text style={styles.serialText}>{item.serial}</Text>
                        <Text style={styles.smuHoursText}>{item.smuHours}</Text>
                        <Text style={styles.amcValidityText}>{item.amcValidity}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.requestButtonTextContainer}>
                        <Text style={styles.requestText}>{item.requestButtonText}</Text>
                    </View>
                    <View style={styles.orderButtonTextContainer}>
                        <Text style={styles.orderText}>{item.orderButtonText}</Text>
                    </View>
                    <View style={styles.planButtonTextContainer}>
                        <Text style={styles.orderText}>{item.planButtonText}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.curveContainer}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder='Search Parts'
                        placeholderTextColor={'white'}
                        style={styles.textInput}
                        value={searchValue}
                        onChangeText={
                            (text) => {
                                setSearchValue(text)
                            }
                        }
                    />
                    <View style={styles.searchButton}>
                        <Image
                            source={require('../../../assets/images/search_icon.png')}
                            style={styles.searchIcon}
                        />
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.locationContainer}>
                        <Image
                            source={require('../../../assets/images/red_location_icon.png')}
                            style={styles.redLocationIcon}
                        />
                        <View style={styles.locationDetailContainer}>
                            <Text style={styles.locationFirstText}>{"Deliver to"}</Text>
                            <Text style={styles.locationSecondText}>{"Vitesco Nagar, Pune, Maharashtra"}</Text>
                        </View>
                        <Image
                            source={require('../../../assets/images/down_arrow.png')}
                            style={styles.downArrowIcon}
                        />
                    </View>
                    <View style={styles.equipmentDetailContainer}>
                        <Image
                            source={require('../../../assets/images/bulldozer_icon.png')}
                            style={styles.bulldozerIcon}
                        />
                        <View style={styles.equipmentTextContainer}>
                            <Text style={styles.equipmentFirstText}>{"Default Equipment"}</Text>
                            <Text style={styles.equipmentSecondText}>{"424B2 - K7C01126"}</Text>
                        </View>
                        <Image
                            source={require('../../../assets/images/information_icon.png')}
                            style={styles.informationIcon}
                        />
                    </View>
                </View>
            </View>
            <FlatList
                data={MyFleetData}
                renderItem={renderIterm}
                keyExtractor={item => item.id}
                style={styles.flatlistContainer}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}

export default MyFleetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        // WHY CONTAINER SAID USED TO JC AND AI? i'm little bit confused...
        // justifyContent:'center',
        // alignItems:'center',
    },
    curveContainer: {
        backgroundColor: '#FCBA13',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textInputContainer: {
        backgroundColor: '#282A2D',
        flexDirection: 'row',
        // margin: 20,
        borderRadius: 5,
        marginHorizontal: 20,
        marginBottom: 20
    },
    textInput: {
        backgroundColor: '#282A2D',
        flexGrow: 1,
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        paddingLeft: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    searchButton: {
        backgroundColor: '#FCBA13',
        flex: 0.23,
        margin: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    searchIcon: {

    },
    mainContainer: {
        backgroundColor: '#FCBA13',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 23,
        marginBottom: 10,
    },
    redLocationIcon: {

    },
    locationDetailContainer: {
        flexDirection: 'row',
    },
    locationFirstText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 20,
        color: '#000103',
    },
    locationSecondText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
        color: '#000103',
        paddingLeft: 5,
    },
    downArrowIcon: {

    },
    equipmentDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 23,
        marginBottom: 60,

    },
    bulldozerIcon: {

    },
    equipmentTextContainer: {
        flexDirection: 'row',


    },
    equipmentFirstText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 20,
        color: '#000103',
    },
    equipmentSecondText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
        color: '#000103',
        paddingLeft: 5,
        color: '#000103',
    },
    informationIcon: {
        marginLeft: 30,
        marginRight: -10
    },
    flatlistContainer: {
        backgroundColor: 'green',
        marginHorizontal: 20,
        marginTop: -50,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    list: {
        backgroundColor: 'yellow',
        margin: 10,
        // flex:1,
        justifyContent:'space-between',
    },
    flatlistRenderContainer: {
        backgroundColor: 'green',
    },
    flatlistMainContainer: {
        backgroundColor: 'yellow',
        flexDirection: 'row',

    },
    imageContainer: {

    },
    bulldozerImage: {
    },
    connectedContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        right: 5,
    },
    checkImage: {

    },
    checkImageRound: {
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal:5,

    },
    connectedText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 12,
        
    },
    rightTextContainer: {

    },
    modelText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#FCBA13',
    },
    serialText: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        color: '#FFFFFF',

    },
    smuHoursText: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        color: '#FFFFFF',

    },
    amcValidityText: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        color: '#FFFFFF',
    },
    buttonContainer: {
        backgroundColor: 'blue',
        flexDirection: 'row',
    },
    requestButtonTextContainer: {
backgroundColor:'red',
height:30,
justifyContent:'center',
alignItems:'center',
width:'40%'
    },
    requestText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        color: '#000000',
    },
    orderButtonTextContainer: {

    },
    orderText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        color: '#000000',
    },
    planButtonTextContainer: {

    },
    orderText: {
        fontFamily: 'Univers 67 Condensed',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 18,
        color: '#000000',
    }


})