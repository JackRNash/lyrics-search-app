import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '../screens/HistoryScreen'
import LyricsScreen from '../screens/LyricsScreen'

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