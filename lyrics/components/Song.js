import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Card from './Card'
import { connect } from 'react-redux'
import { delSearch } from '../state/actions'

const Song = props => {
  const removeSong = () => {
    props.delSearch(props.id)
  }

  return (
    // <View style={styles.container}>
    <Card style={styles.card}>
      <TouchableOpacity onPress={props.showLyrics}>
        <View style={styles.firstRow}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={removeSong}
          >
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
      </TouchableOpacity>
    </Card>
    // </View>
  )
}

const mapStateToProps = (state) => {
  return { history: state.history }
}

const mapDispatchToProps = dispatch => ({
  delSearch: id => dispatch(delSearch(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Song)

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  card: {
    // width: '60%',
    margin: 10
  },
  close: {
    // position: 'absolute',
    top: -15,
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
    fontSize: 18,
    // color: '#808080'
  },
  byArtist: {
    fontFamily: 'nunito-light',
    fontSize: 16,
    marginTop: -10,
    // color: 'grey'
  }
})