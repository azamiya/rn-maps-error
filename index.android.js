/*
 * This file exists because react-native-navigation current version (v1.1)
 * expects to find index.android.js, so you can see it's a copy of index.js
 */

import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/containers";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "conservis.Dashboard",
    title: "Dashboard",
    navigatorStyle: {
      navBarHidden: true
    },
    navigatorButtons: {}
  }
});
