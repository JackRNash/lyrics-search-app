import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/TabBarIcon'
import SearchStack from './SearchStack'
import HistoryStack from './HistoryStack'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Search'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HistoryStack}
        options={{
          title: 'History',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-time" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Search':
      return 'Search'
    case 'History':
      return 'History'
    default:
      return ''
  }
}
