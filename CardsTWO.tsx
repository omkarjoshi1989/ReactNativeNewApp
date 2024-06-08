import Reactfrom from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import FlatCards from "./components/FlatCard";
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import Flag from "./components/Flag";

export default function CardsTWO(): JSX.Element {
    return (
        <SafeAreaView style={[styles.styleMargin,]}>
            <ScrollView>
            <View style={styles.styleCenterText}><Text>Hello Cards Demo</Text></View>
            <FlatCard />
            <ElevatedCard />
            <FancyCard />
            <ActionCard />
            <Flag />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleMargin: {
        margin: 8
    },
    styleBackgroundGrey: {
        backgroundColor: 'grey'
    },
    styleCenterText: {
        marginTop: 16,
        alignItems: 'center'
    },
})
