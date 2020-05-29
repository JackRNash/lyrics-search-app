import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import fetchLyrics  from '../LyricFetch'

const LyricsScreen = ({ route, navigation }) => {
  const song = route.params.song
  const artist = route.params.artist
  const [lyrics, setLyrics] = useState('')
  fetchLyrics(song, artist).then(lyrics => setLyrics(lyrics))
  
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text>{song}</Text>
        <Text>by {artist}</Text>
      </View>

      <ScrollView style={styles.lyricsContainer}>
        <Text>{lyrics}</Text>
      </ScrollView>
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
  descContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    paddingLeft: 15,
  },
  lyricsContainer: {
    marginTop: 100
  },
})

export default LyricsScreen