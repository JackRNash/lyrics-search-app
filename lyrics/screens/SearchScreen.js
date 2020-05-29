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
import { setArtist, setSong, setLyrics } from '../state/actions'
import { connect } from 'react-redux'

const SearchScreen = props => {
  const [loading, setLoading] = useState(false)

  const songHandler = newSong => {
    props.setSong(newSong)
  }

  const artistHandler = newArtist => {
    props.setArtist(newArtist)
  }

  const lyricFailHandler = () => {
    setLoading(false)
    Alert.alert('Song Not Found',
      "We couldn't find that song...\n\nDouble check your spelling and that you have an internet connection",
      [{ text: 'Okay', style: 'default' }]
    )
  }

  const lyricSuccessHandler = lyrics => {
    setLoading(false)
    if (lyrics == null || lyrics === '.') {
      lyricFailHandler() // if not found, will be null or .
    } else {
      props.setLyrics(lyrics)
      props.navigation.navigate('Lyrics')// {'song': song, 'artist': artist, 'lyrics': lyrics})
    }
  }

  const pressSearch = () => {
    // setLyrics('')
    Keyboard.dismiss()
    setLoading(true)
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
    lyrics: state.lyrics
  }
}

const mapDispatchToProps = dispatch => ({
  setArtist: artist => dispatch(setArtist(artist)),
  setSong: song => dispatch(setSong(song)),
  setLyrics: lyrics => dispatch(setLyrics(lyrics))
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
    fontFamily: 'avenir',
  },
  inputContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 30,
    fontFamily: 'avenir',
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