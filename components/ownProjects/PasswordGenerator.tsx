import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, 'should be minimum of 4')
        .max(16, 'should be of maximum 16')
        .required('length is required')
})

export default function PasswordGenerator() {
    return (
        <View>
            <Text>      Password Generator:</Text>
        </View>
    )
}

const styles = StyleSheet.create({})