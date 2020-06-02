import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native'
import Colors from '../constants/Colors'

// This screen displays the lyrics of a song.
// It takes in the following properties:
// * song - title of the song
// * artist - artist of the song
// * lyrics - lyrics for the song
// It was written using input properties instead of the
// the song / artist / lyrics in the store so that
// the screen could be easily used in the history
// tab as well.

const LyricsScreen = ({ route, navigation }) => {
  const song = route.params.song
  const artist = route.params.artist
  const lyrics = route.params.lyrics

  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text style={styles.song}>{song}</Text>
        <Text style={styles.byArtist}>by {artist}</Text>
      </View>

      <ScrollView style={styles.lyricsContainer}>
        <Text style={styles.lyricsText}>{lyrics}</Text>
      </ScrollView>

      <View>
        <Text style={styles.watermark}>Lyrics supplied by Genius.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  descContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: Colors.primaryColor,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    backgroundColor: Colors.primaryColor, // '#fbfbfb',
    paddingVertical: 20,
    paddingLeft: 15
  },
  song: {
    fontFamily: 'nunito',
    fontSize: 30
  },
  byArtist: {
    fontFamily: 'nunito-light',
    fontSize: 20
  },
  lyricsContainer: {
    marginTop: 120
  },
  lyricsText: {
    fontFamily: 'nunito',
    fontSize: 15
  },
  watermark: {
    fontFamily: 'nunito-light',
    color: 'grey'
  }
})

export default LyricsScreen
