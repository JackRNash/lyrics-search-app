import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Card from './Card'

const Song = props => {
  return (
    // <View style={styles.container}>
    <Card style={styles.card}>
      <View style={styles.firstRow}>
        <TouchableOpacity 
          activeOpacity={0.1} onPress={() => console.log('worked4')}>
          <Ionicons
            name='ios-close'
            size={30}
            style={styles.close}
            color={Colors.tabIconDefault}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Text style={styles.byArtist}>by {props.artist}</Text>
    </Card>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  card: {
    width: '60%',
  },
  close: {
    // position: 'absolute',
    top: -10,
    // left: 0,
    right: 0,
    alignSelf: 'flex-end'
  },
  firstRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  byArtist: {
    fontFamily: 'nunito',
    fontSize: 14
  }
})

export default Song