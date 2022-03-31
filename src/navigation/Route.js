import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack'
import BottomTabNav from './BottomTabNav';

import HeaderStackScreen from './StackNav';

const Stack2 = createStackNavigator();

export default function Routes() {

  return (
      <>
    <NavigationContainer>
      <Stack2.Navigator screenOptions={{headerShown:false}} >
        {true? HeaderStackScreen(Stack2) : AuthStack(Stack2)}
      </Stack2.Navigator>
    </NavigationContainer>
      </>
  );
}
