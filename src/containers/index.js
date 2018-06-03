import { Navigation } from 'react-native-navigation';

import Dashboard from './Dashboard';

export const registerScreens = function registerScreens() {
  Navigation.registerComponent('conservis.Dashboard', () => Dashboard);
};
