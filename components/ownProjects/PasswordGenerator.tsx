import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'Should be more than 4 chars!')
        .max(16, 'Should be maximum of 16 chars!')
        .required('Length is required')
})

export default function PasswordGenerator() {
    const [password, setPassword] = useState('')
    const [isPassGenerated, setIsPassword] = useState(false)
    const [lowerCase, setLowerCase] = useState(false)
    const [upperCase, setUpperCase] = useState(false)
    const [numberCase, setNumbersCase] = useState(false)

    const generatePasswordString = (passwordLength: number) => {
        let characterList = ''
        const upperCaseRegex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowerCaseRegex = 'abcdefghijklmnopqrstuvwxyz'
        const digitsRegex = '0123456789'
        if (upperCase) {
            characterList += upperCaseRegex
        }
        if (lowerCase) {
            characterList += lowerCaseRegex
        }
        if (numberCase) {
            characterList += digitsRegex
        }
        const passwordResult = createPassword(characterList, passwordLength)
        setPassword(passwordResult)
        setIsPassword(true)
    }

    const createPassword = (characters: string, passwordLength: number) => {
        let result = ''
        for (let i = 0; i < passwordLength; ++i) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result
    }

    const resetPassword = () => {
        setPassword('')
        setIsPassword(false)
        setLowerCase(false)
        setUpperCase(false)
        setNumbersCase(false)
    }

    return (
        <View style={styles.container}>
            <Text>Password Generator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        backgroundColor: "#eeeeee"
    }
})