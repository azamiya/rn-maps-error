import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/containers';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'conservis.Dashboard',
    title: 'Dashboard',
    navigatorStyle: {
      navBarHidden: true,
    },
    navigatorButtons: {},
  },
});
