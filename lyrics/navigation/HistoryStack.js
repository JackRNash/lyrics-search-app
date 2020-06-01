import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '../screens/HistoryScreen'
import LyricsScreen from '../screens/LyricsScreen'

// Use a stack so that one can navigate to the lyrics
// of a song from the History tab
const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lyrics"
        component={LyricsScreen}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  )
}

export default HistoryStack