import { setSong, setArtist, setLyrics, addSearch } from './actions'

const initial_state = {
  song: '',
  artist: '',
  lyrics: '',
  // temporary for testing purposes
  history: [
    // {
    //   song: 'Borderline',
    //   artist: 'Brad Sucks',
    //   lyrics: '',
    //   id: 1
    // },
    // {
    //   song: 'Dropping out of school',
    //   artist: 'Brad Sucks',
    //   lyrics: '',
    //   id: 2
    // },
  ]
}

let song_id = 0

const lyricsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'SET_SONG':
      return Object.assign({}, state, {
        song: action.song
      })
    case 'SET_ARTIST':
      return Object.assign({}, state, {
        artist: action.artist
      })
    case 'SET_LYRICS':
      return Object.assign({}, state, {
        lyrics: action.lyrics
      })
    case 'ADD_SEARCH':
      return Object.assign({}, state, {
        history: [...state.history,
        {
          song: action.song,
          artist: action.artist,
          lyrics: action.lyrics,
          id: song_id++
        }
      ]
      })
    case 'DEL_SEARCH':
      return Object.assign({}, state, {
        history: state.history.filter(search => search.id !== action.id)
      })
  }
  return state
}

export default lyricsReducer