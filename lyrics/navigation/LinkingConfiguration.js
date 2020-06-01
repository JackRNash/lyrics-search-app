import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Search: 'search',
        Lyrics: 'lyrics',
        History: 'history'
      },
    },
  },
};
