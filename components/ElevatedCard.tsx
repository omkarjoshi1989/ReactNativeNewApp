import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <SafeAreaView>
      <View style={styles.styleCenterText}><Text>ELEVATED CARDS</Text></View>
      <ScrollView horizontal
        style={styles.container}>
        <View style={[styles.card, styles.cardElevated, styles.styleRedBg]}>
          <Text style={styles.styleWhiteText}>TAP HERE for RED</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.styleGreenBg]}>
          <Text style={styles.styleWhiteText}>TAP HERE for GREEN</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.styleBlueBg]}>
          <Text style={styles.styleWhiteText}>TAP HERE BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.styleYellowBg]}>
          <Text style={styles.styleWhiteText}>TAP HERE YELLOW</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.styleOrangeBg]}>
          <Text style={styles.styleWhiteText}>TAP HERE ORANGE</Text>
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
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    margin: 8,
    elevation: 4,
    shadowOffset: {
      height: 2, width: 2
    },
    shadowColor: 'red'
  },
  container: {
    padding: 8,
    margin: 8
  },
  styleCenterText: {
    marginTop: 16,
    alignItems: 'center'
  },
  styleRedBg: {
    backgroundColor: 'red'
  },
  styleGreenBg: {
    backgroundColor: 'green'
  },
  styleBlueBg: {
    backgroundColor: 'blue'
  },
  styleYellowBg: {
    backgroundColor: 'yellow'
  },
  styleOrangeBg: {
    backgroundColor: 'orange'
  },
  styleWhiteText: {
    color: 'white'
  }
})