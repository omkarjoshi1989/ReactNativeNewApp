import Reactfrom from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function FlatCard(): JSX.Element {
    return (
        <SafeAreaView>
            <Text style={styles.headingText}>Flat Card</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardRed]}>
                    <Text style={styles.styleText}>RED</Text>
                </View>
                <View style={[styles.card, styles.cardGreen]}>
                    <Text style={styles.styleText}>GREEN</Text>
                </View>
                <View style={[styles.card, styles.cardBlue]}>
                    <Text style={styles.styleText}>BLUE</Text>
                </View>
                <View style={[styles.card, styles.cardOrange]}>
                    <Text style={styles.styleText}>ORANGE</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flexDirection: 'row',
    },
    card: {
        height: 100,
        width: 100,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    cardRed: {
        backgroundColor: 'red'
    },
    cardGreen: {
        backgroundColor: 'green'
    },
    cardBlue: {
        backgroundColor: 'blue'
    },
    cardOrange: {
        backgroundColor: 'orange'
    },
    styleText: {
        color: 'white'
    }
})