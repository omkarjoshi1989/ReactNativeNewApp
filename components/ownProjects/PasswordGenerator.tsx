import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'should be minimum of 4')
        .max(16, 'should be of maximum 16')
        .required('length is required')
})

export default function PasswordGenerator() {

    const [password, setPassword] = useState('') // 2nd parameter is method name to set the vlaue to 1st parameter that is a variable
    const [isPassGenrated, setIsPassGenerated] = useState(false)
    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString = (passwordLength: number) => {
        let charatcerList = ''
        const upperCaseChars = 'ABCDEFGHIJIKLMNOPQRSTUVWXYZ'
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const digitChars = '0123456789'
        const symbolChars = '!@#$%^&*()_+'
        if (upperCase) {
            charatcerList += upperCaseChars
        }
        if (lowerCase) {
            charatcerList += lowerCaseChars
        }
        if (numbers) {
            charatcerList += digitChars
        }
        if (symbols) {
            charatcerList += symbolChars
        }
        const passwordResult = createPassword(charatcerList, passwordLength)
        setPassword(passwordResult)
        setIsPassGenerated(true)
    }

    const createPassword = (characters: string, passwordLength: number) => {
        let result = ''
        for (let index = 0; index < passwordLength; index++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)// individual character from String
        }
        return result
    }

    const resetPasswordState = () => {
        setPassword('')
        setIsPassGenerated(false)
        setLowerCase(false)
        setUpperCase(false)
        setNumbers(false)
        setSymbols(false)
    }

    return (
        <View>
            <Text style={styles.headingText}>Password Generator:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {},
})