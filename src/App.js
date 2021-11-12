import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import Login from "./screens/Login/";
import SideBar from "./screens/sidebar";


const Drawer = DrawerNavigator(
    {
      Home: { screen: Home }
    },
    {
      initialRouteName: "Home",
      contentOptions: {
        activeTintColor: "#e91e63"
      },
      contentComponent: props => <SideBar {...props} />
    }
  );
  
const AppNavigator = StackNavigator(
    {
        Login: {screen: Login},
        Drawer: { screen: Drawer }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
)

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
