import Reactfrom from "react";
import { View, Text, SafeAreaView } from 'react-native';
import FlatCards from "./components/FlatCard";
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";

export default function CardsTWO(): JSX.Element {
    return (
        <SafeAreaView>
            <Text>Hello Cards Demo</Text>
            <FlatCard />
            <ElevatedCard/>
        </SafeAreaView>
    )
}