import React from 'react'
import {
    View,
    Text,
    useColorScheme,
    StyleSheet
} from 'react-native'

function ProApp(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={allStyles.styleContainer}>
            <Text style={
                isDarkMode ?
                    allStyles.styleTextWhite30 :
                    allStyles.styleTextBlack30}
            >Hello React Native</Text>
        </View>
    )
}

const allStyles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    styleText30: {
        fontSize: 30
    },
    styleTextWhite30: {
        fontSize: 30,
        color: 'white'
    },
    styleTextBlack30: {
        fontSize: 30,
        color: 'black'
    }
})

export default ProApp