import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Song from '../components/Song'
import Colors from '../constants/Colors'
import { connect } from 'react-redux'

const History = props => {
  let noSearches

  if (props.history.length === 0) {
    noSearches = (
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.noSearch}>No previous searches...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recent Searches</Text>
      </View>

      <ScrollView style={styles.searchContainer}>
        {/* <Song title="Making Me Nervous" artist="Brad Sucks" /> */}

        {
          props.history.map((prevSearch) => {
            // console.log('Key:', prevSearch.id)
            const delSong = () => {
              () =>
                console.log("navigating...")
              props.navigation.navigate('Lyrics', { 'song': prevSearch.song, 'artist': prevSearch.artist, 'lyrics': prevSearch.lyrics })
            }
            return (
              <Song
                key={prevSearch.id}
                title={prevSearch.song}
                artist={prevSearch.artist}
                lyrics={prevSearch.lyrics}
                id={prevSearch.id}
                showLyrics={delSong}
              />
            )
          })}
      </ScrollView>
      {noSearches}

    </View>
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

export default connect(mapStateToProps)(History)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: Colors.primaryColor,
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: Colors.primaryColor,//'#fbfbfb',
    paddingVertical: 30,
    paddingTop: 40,
    paddingLeft: 15,
  },
  title: {
    fontFamily: 'nunito',
    fontSize: 40
  },
  searchContainer: {
    marginTop: 130,
    // justifyContent: 'flex-start'
  },
  noSearch: {
    fontFamily: 'nunito',
    fontSize: 20,
    color: 'grey'
  }
})