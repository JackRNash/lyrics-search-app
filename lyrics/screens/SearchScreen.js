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

const SearchScreen = props => {
  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')

  const songHandler = newSong => {
    setSong(newSong)
  }

  const artistHandler = newArtist => {
    setArtist(newArtist)
  }

  const pressSearch = () => {

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
          // placeholderTextColor="#A9A9A9"
          onChangeText={artistHandler}
        />
        <View style={styles.button}>
          <Button
            title="Search"
            onPress={
              () => props.navigation.navigate('Lyrics', {'song': song, 'artist': artist})
            }
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
    // backgroundColor: '#F5F5F5',
    // borderRadius: 10,
    // borderWidth: 0,
    // borderBottomWidth: 2,
    width: '80%',
    textAlign: 'center',
  },
  button: {
    width: '30%',
    marginTop: 10
  }
})