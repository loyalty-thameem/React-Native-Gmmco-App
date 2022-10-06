import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HelpScrollData from '../../../../LocalData/HelpScrollData'
// I DON'T KNOW BELOW FLATLIST. IT'S FROM GESTURE.
import { FlatList } from 'react-native-gesture-handler'

const OpenScreen = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatlistMainContainer}>
                <Text style={styles.ticketNumberText}>{item.ticketNumber}</Text>
                <View style={styles.serialNumberTextContainer}>
                    <Text style={styles.serialNumberText}>{item.serialNumber.slice(0, 9)}</Text>
                    <Text style={styles.serialNumberTextColor}>{item.serialNumber.slice(9)}</Text>
                </View>
                <Text style={styles.deliveryIssueStatusText}>{item.deliveryIssueStatus}</Text>
                <Text style={styles.loremIpsumText}>{item.loremIpsumText}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.flatlistContainer}>
            <FlatList
                data={HelpScrollData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.flatlistInsideContainer}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}

export default OpenScreen

const styles = StyleSheet.create({
    flatlistContainer: {
        backgroundColor: '#000103',
        flex: 1,
    },
    flatlistInsideContainer: {
        // backgroundColor: 'green',
    },
    list: {
        // backgroundColor: 'orange',
        margin: 20,
        justifyContent: 'flex-start',
        flex: 1,
    },
    flatlistMainContainer: {
        backgroundColor: '#191B1D',
        marginBottom: 20,
        borderRadius: 5,
    },
    ticketNumberText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',
        marginVertical: 10,
        marginHorizontal: 10
    },
    serialNumberTextContainer: {
        flexDirection: 'row',
        marginHorizontal: 10

    },
    serialNumberText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF',

    },
    serialNumberTextColor: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#FCBA13',
    },
    deliveryIssueStatusText: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 18,
        color: '#FFFFFF',
        marginVertical: 10,
        marginHorizontal: 10
    },
    loremIpsumText: {
        fontFamily: 'Arial',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 20,
        color: '#919191',
        marginBottom: 10,
        marginHorizontal: 10,
        // backgroundColor:'blue',
    },
    dateContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    dateText: {
        fontFamily: 'Univers 57 Condensed',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: '#A6A6A6',
    },
})