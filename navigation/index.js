import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

//import screen collection
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Explore from "../screens/Explore";
import Browser from "../screens/Browser";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

//import theme constants
import { theme } from "../constants";

//app navigation stack
const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Explore,
    Browser,
    Product,
    Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
