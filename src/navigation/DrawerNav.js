
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import Home from "../Screens/Home";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Contact" component={} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;