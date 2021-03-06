export const setSong = song => ({
  type: 'SET_SONG',
  song
})

export const setArtist = artist => ({
  type: 'SET_ARTIST',
  artist
})

export const setLyrics = lyrics => ({
  type: 'SET_LYRICS',
  lyrics: lyrics
})

export const addSearch = (song, artist, lyrics) => ({
  type: 'ADD_SEARCH',
  song,
  artist,
  lyrics
})

export const delSearch = id => ({
  type: 'DEL_SEARCH',
  id
})
