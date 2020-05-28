import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen'
import LyricsScreen from '../screens/LyricsScreen'

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
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

export default SearchStack