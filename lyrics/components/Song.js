import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Card from './Card'
import { connect } from 'react-redux'
import { delSearch } from '../state/actions'

// This component displays a single song (to be used in 
// the history screen). It takes in the following properties:
// * title - the title of this song
// * artist - the artist for this song
// * id - the id of this element in the history (assigned when 
//        first added)
// * showLyrics - a functoin that navigates to a lyrics screen
//                and displays the correct lyrics associated 
//                with this song

const Song = props => {
  const removeSong = () => {
    props.delSearch(props.id)
  }

  return (
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
  card: {
    margin: 10
  },
  close: {
    top: -15,
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
  },
  byArtist: {
    fontFamily: 'nunito-light',
    fontSize: 16,
    marginTop: -10,
  }
})