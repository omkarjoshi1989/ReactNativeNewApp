import { Linking, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function ActionCard(): JSX.Element {
    function openWebsite(url: string) {
        Linking.openURL(url)
    }
    return (
        <SafeAreaView>
            <View style={styles.styleCenterText}><Text>ACTION CLICK CARDS</Text></View>
            <View>
                <TouchableOpacity
                    onPress={() => openWebsite('https://google.co.in')}>
                    <Text>Click Here!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleBackground: {
        backgroundColor: 'yellow',
    },
    styleViewCenter: {
    },
    styleCenterText: {
        marginTop: 16,
        alignItems: 'center'
    },
})