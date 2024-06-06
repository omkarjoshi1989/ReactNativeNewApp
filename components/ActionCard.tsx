import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(url: string) {
        Linking.openURL(url)
    }
    return (
        <View style={styles.styleViewCenter}>
            <Text style={{fontWeight:'bold'}}>ActionCard</Text>
            <Text style={styles.styleBackground}>Dynamic Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    styleBackground: {
        backgroundColor: 'yellow',
    },
    styleViewCenter: {
        alignItems: 'center',
    }
})