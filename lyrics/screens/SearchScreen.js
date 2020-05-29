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
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import Card from '../components/Card'
import fetchLyrics  from '../components/LyricFetch'

const SearchScreen = props => {
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [lyrics, setLyrics] = useState('')

  const songHandler = newSong => {
    setSong(newSong)
  }

  const artistHandler = newArtist => {
    setArtist(newArtist)
  }

  const lyricFailHandler = () => {
    console.log('Song not found :(')
    Alert.alert('Song Not Found', 
    "We couldn't find that song... Double check your spelling and that you have an internet connection",
    [{ text: 'Okay', style: 'default'}]
    )
  }

  const lyricSuccessHandler = lyrics => {
    if (lyrics == null || lyrics === '.') {
      lyricFailHandler() // if not found, will be null or .
    } else {
      console.log(lyrics)
      props.navigation.navigate('Lyrics', {'song': song, 'artist': artist, 'lyrics': lyrics})
    }
  }

  const pressSearch = () => {
    setLyrics('')
    fetchLyrics(song, artist).then(lyricSuccessHandler, lyricFailHandler)
  }


  return (
    <TouchableWithoutFeedback onPress={() =>
      Keyboard.dismiss()
    }>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>lyrics</Text>
        </View>
        {/* <Card style={styles.inputContainer}> */}
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
        />
        <View style={styles.button}>
          <Button
            title="Search"
            onPress={pressSearch}
          />
        </View>
        {/* </Card> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    height: '30%',
    maxHeight: 200
    // width: '100%'
  },
  title: {
    fontSize: 60,
  },
  inputContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 30
  },
  input: {
    width: '80%',
    textAlign: 'center',
  },
  button: {
    width: '30%',
    marginTop: 10
  }
})