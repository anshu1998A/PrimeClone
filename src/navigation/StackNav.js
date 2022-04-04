import { View, Text } from 'react-native'
import React from 'react';
import setting  from '../Screens/Setting';
import Header from '../Components/Header';
import BottomTabNav from '../navigation/BottomTabNav';
import Stream from '../Screens/Stream';
import Movies from '../Screens/MoviesS';


function HeaderStackScreen(Stack) {
    return (
        <>
            <Stack.Screen name="Bottom" component={BottomTabNav} />
            <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={setting} />
            <Stack.Screen name='Stream' component={Stream} />
            <Stack.Screen name='Movies' component={Movies} />
        </>
    )
}
export default HeaderStackScreen