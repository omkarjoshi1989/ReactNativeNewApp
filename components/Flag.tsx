import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flag() {
    return (
        <View style={[styles.styleCenterText]}>
            <Text>Flag</Text>
            <View>
                <View style={[styles.rectangle, styles.orangeBg]} />
                <View style={[styles.center]}>
                    <View style={[styles.circle,]} />
                </View>
                <View style={[styles.rectangle, styles.greenBg]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    styleCenterText: {
        marginTop: 16,
        alignItems: 'center'
    },
    rectangle: {
        width: 300, height: 50
    },
    orangeBg: { backgroundColor: 'orange' },
    whiteBg: { backgroundColor: 'white' },
    greenBg: { backgroundColor: 'green' },
    blackBorder: { backgroundColor: 'black' },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: 'blue',
        paddingTop: 8, paddingBottom: 8
    },
    center: {
        alignItems: 'center',
    },
})