import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Song from '../components/Song'
import Colors from '../constants/Colors'

const History = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Searches</Text>
      </View>

      <Song title="Making Me Nervous" artist="Brad Sucks" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: Colors.primaryColor,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: Colors.primaryColor,//'#fbfbfb',
    paddingVertical: 20,
    paddingLeft: 15,
  },
  title: {
    fontFamily: 'nunito',
    fontSize: 30
  }
})

export default History