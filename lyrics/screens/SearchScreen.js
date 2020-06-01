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

const SearchScreen = props => {

  const songHandler = newSong => {
    props.setSong(newSong)
  }

  const artistHandler = newArtist => {
    props.setArtist(newArtist)
  }

  const lyricFailHandler = () => {
    Alert.alert('Song Not Found',
      "We couldn't find that song...\n\nDouble check your spelling and that you have an internet connection",
      [{ text: 'Okay', style: 'default' }]
    )
  }

  const lyricSuccessHandler = lyrics => {
    if (lyrics == null || lyrics === '.') {
      lyricFailHandler() // if not found, will be null or .
    } else {
      props.setLyrics(lyrics)
      props.addSearch(props.song, props.artist, props.lyrics)
      props.navigation.navigate('Lyrics')// {'song': song, 'artist': artist, 'lyrics': lyrics})
    }
  }

  const pressSearch = () => {
    // setLyrics('')
    Keyboard.dismiss()
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