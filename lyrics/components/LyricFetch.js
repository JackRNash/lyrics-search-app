import { getLyrics, getSong } from 'genius-lyrics-api'
import {REACT_APP_GENIUS_API_KEY} from '../secret'

export default function fetchLyrics(song, artist) {
  const options = {
    apiKey: REACT_APP_GENIUS_API_KEY,
    title: song,
    artist: artist,
    optimizeQuery: true
  }
  console.log("Received "+options.title+" by "+options.artist)
  return getLyrics(options)
}