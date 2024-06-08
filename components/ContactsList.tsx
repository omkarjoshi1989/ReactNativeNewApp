import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactsList() {
    const contacts = [
        { uid: 1, name: "Varada", status: "present" },
        { uid: 2, name: "Rajashree", status: "cooking" },
        { uid: 3, name: "Omkar", status: "online" },
        { uid: 4, name: "Shreeram", status: "online" },
    ]
    return (
        <View style={[styles.styleCenterText]}>
            <Text>ContactsList</Text>
            <ScrollView style={styles.container}
                scrollEnabled={true}>
                {contacts.map(({ uid, name, status }) => (
                    <View key={uid}>
                        <View style={styles.rowStyle}>
                            <Text style={styles.marginLeftStyle}>NAME:{name}</Text>
                            <Text>STATUS:{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    styleCenterText: {
        marginTop: 16,
        alignItems: 'center'
    },
    container: { height: 100, backgroundColor: '#cccccc', },
    rowStyle: { flexDirection: 'row', justifyContent: 'space-around' },
    marginLeftStyle: { marginLeft: 16 },
})