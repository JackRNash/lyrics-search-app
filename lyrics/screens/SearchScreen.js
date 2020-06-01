import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import fetchLyrics from '../components/LyricFetch'
import { setArtist, setSong, setLyrics, addSearch } from '../state/actions'
import { connect } from 'react-redux'

// The search screen is the main screen of the app.
// Users can enter the title and (optionally) the artist
// of a song and press search to get the lyrics. In the
// event that the song is not found, an alert pops up
// informing the user and suggesting they check their
// internet connection and spelling.

const SearchScreen = props => {

  const songHandler = newSong => {
    props.setSong(newSong)
  }

  const artistHandler = newArtist => {
    props.setArtist(newArtist)
  }

  // handles the case that the lyrics are not found
  const lyricFailHandler = () => {
    Alert.alert('Song Not Found',
      "We couldn't find that song...\n\nDouble check your spelling and that you have an internet connection",
      [{ text: 'Okay', style: 'default' }]
    )
  }

  // handles the case that the lyrics are found
  const lyricSuccessHandler = lyrics => {
    if (lyrics == null || lyrics === '.') {
      lyricFailHandler() // if not found, will be null or .
    } else {
      props.setLyrics(lyrics)
      props.addSearch(props.song, props.artist, lyrics) // update the history tab
      props.navigation.navigate('Lyrics', { 'song': props.song, 'artist': props.artist, 'lyrics': lyrics })
    }
  }

  const pressSearch = () => {
    Keyboard.dismiss()
    // fetchLyrics returuns a promise and which function is executed depends on if
    // it was resolved succesfully or not
    fetchLyrics(props.song, props.artist).then(lyricSuccessHandler, lyricFailHandler)
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>lyrics</Text>
        </View>
        <TextInput
          placeholder="song"
          style={{ ...styles.inputText, ...styles.input }}
          underlineColorAndroid='transparent'
          onChangeText={songHandler}
        />
        <Text style={styles.inputText}>by</Text>
        <TextInput
          placeholder="artist"
          style={{ ...styles.inputText, ...styles.input }}
          underlineColorAndroid='transparent'
          onChangeText={artistHandler}
          onSubmitEditing={pressSearch}
        />
        <View style={styles.button}>
          <Button
            title="Search"
            style={styles.button}
            onPress={pressSearch}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const mapStateToProps = (state) => {
  return {
    song: state.song,
    artist: state.artist,
    lyrics: state.lyrics,
    history: state.history
  }
}

const mapDispatchToProps = dispatch => ({
  setSong: song => dispatch(setSong(song)),
  setArtist: artist => dispatch(setArtist(artist)),
  setLyrics: lyrics => dispatch(setLyrics(lyrics)),
  addSearch: (song, artist, lyrics) => dispatch(addSearch(song, artist, lyrics))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    height: 100
  },
  title: {
    fontSize: 60,
    fontFamily: 'nunito-light',
  },
  inputContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 30,
    fontFamily: 'nunito-light',
  },
  input: {
    width: '80%',
    textAlign: 'center',
  },
  button: {
    width: 80,
    marginTop: 10,
  }
})