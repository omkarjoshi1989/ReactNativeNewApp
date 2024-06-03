import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    useColorScheme,
    StyleSheet
} from 'react-native'

function ProApp(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={allStyles.container}>
            <Text style={
                isDarkMode ? allStyles.whiteText : allStyles.blackText}
            >Hello React Native</Text>
        </View>
    )
}

const allStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textStyles: {
        fontSize: 30
    },
    whiteText: {
        fontSize: 30,
        color: 'white'
    },
    blackText: {
        fontSize: 30,
        color: 'black'
    }
})

export default ProApp