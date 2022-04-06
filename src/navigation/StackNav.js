import { View, Text } from 'react-native'
import React from 'react';
import Setting from '../Screens/Setting'
import Header from '../Components/Header';
import BottomTabNav from '../navigation/BottomTabNav';
import Stream from '../Screens/Stream';
import Movies from '../Screens/MoviesS';


function HeaderStackScreen(Stack) {
    return (
        <>
            <Stack.Screen name="Bottom" component={BottomTabNav} />
            <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name='Stream' component={Stream} />
            <Stack.Screen name='Movies' component={Movies} />
        </>
    )
}
export default HeaderStackScreen