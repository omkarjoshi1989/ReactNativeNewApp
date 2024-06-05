import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <SafeAreaView>
      <Text>ElevatedCard</Text>
      <ScrollView horizontal
        style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP HERE 1</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP HERE 2</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP HERE 3</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP HERE 4</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TAP HERE 5</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    margin: 8,
    elevation: 4,
    shadowOffset: {
      height:2, width: 2
    },
    shadowColor:'red'
  },
  container: {
    padding: 8,
    margin: 8
  }
})