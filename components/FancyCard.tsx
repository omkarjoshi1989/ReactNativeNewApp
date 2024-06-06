import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                >
                </Image>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>React Native</Text>
                    <Text style={styles.cardLabel}>Learning React Native on Android!</Text>
                    <Text style={styles.cardDescription}>Description</Text>
                    <Text style={styles.cardFooter}>Footer</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8
    },
    card: {
        borderRadius: 6, alignItems: 'center'
    },
    cardElevated: {
        backgroundColor: 'grey', elevation: 5,
    },
    cardImage: { height: 100, width: 100, },
    cardBody: {
        paddingHorizontal: 12, alignItems: 'center'
    },
    cardTitle: { color: 'white', fontWeight: 'bold', alignItems: 'center', },
    cardLabel: { color: 'white', alignItems: 'center', },
    cardDescription: { color: 'white', },
    cardFooter: { color: 'white', },
})