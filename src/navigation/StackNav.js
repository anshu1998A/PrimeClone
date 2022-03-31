import { View, Text } from 'react-native'
import React from 'react';
import { setting } from '../Screens/Setting';
import Header from '../Components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from '../navigation/BottomTabNav';
import Login from '../Screens/Login';


const Stack = createStackNavigator()

function HeaderStackScreen(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Bottom" component={BottomTabNav} />
            <Stack.Screen name="Header" component={Header} options={{headerShown:false}}/>
            <Stack.Screen name="Settings" component={setting}/>
            <Stack.Screen name="LogIn" component={Login}/>
        </Stack.Navigator>
    )
}
export default HeaderStackScreen