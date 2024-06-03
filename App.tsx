import React from "react"
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  useColorScheme
} from 'react-native'

function App(): JSX.Element {
  return (
    <View
      style={{
        padding: 10
      }}>
      <Text
        style={{
         fontSize:50 
        }}>Hello React Native World into this !</Text>
      <Text>Enter Username:</Text>
      <TextInput
        style={{
          height: 40,
          width: 00,
          borderColor: 'black',
          borderWidth: 1
        }}
        defaultValue="enter username" />
    </View>
  )
}

export default App