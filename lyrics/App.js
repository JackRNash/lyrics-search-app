import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lyricsReducer from './state/reducer'
import LyricApp from './LyricApp';

const store = createStore(lyricsReducer)

export default function App(props) {
  return (
    <Provider store={store}>
      <LyricApp />
    </Provider>
  )
}
