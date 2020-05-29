import { setSong, setArtist, setLyrics, addSearch } from './actions'

const initial_state = {
  song: '',
  artist: '',
  lyrics: '',
  history: []
}

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
        }
      ]
      })
  }
  return state
}

export default lyricsReducer