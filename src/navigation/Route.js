import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack'
import HeaderStackScreen from './StackNav';
import { useSelector } from 'react-redux';



const Stack2 = createStackNavigator();

export default function Routes() {

  const statusReducer = useSelector(state => state.statusReducer)
  return (
      <>
    <NavigationContainer>
      <Stack2.Navigator screenOptions={{headerShown:false}}>
        { statusReducer ? HeaderStackScreen(Stack2) : AuthStack(Stack2) } 
      </Stack2.Navigator>
    </NavigationContainer>
      </>
  );
}
