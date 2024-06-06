import Reactfrom from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import FlatCards from "./components/FlatCard";
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";

export default function CardsTWO(): JSX.Element {
    return (
        <SafeAreaView style={[styles.styleMargin,]}>
            <Text>Hello Cards Demo</Text>
            <FlatCard />
            <ElevatedCard />
            <FancyCard />
            <ActionCard/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    styleMargin: {
        margin: 8
    },
    styleBackgroundGrey:{
        backgroundColor:'grey'
    }
})
