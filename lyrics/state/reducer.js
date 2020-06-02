const initialState = {
  song: '',
  artist: '',
  lyrics: '',
  history: []
}

let songId = 3

const lyricsReducer = (state = initialState, action) => {
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
            id: songId++
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
