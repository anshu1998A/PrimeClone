import { View, Text } from 'react-native'
import React from 'react';
import Setting from '../Screens/Setting'
import Header from '../Components/Header';
import BottomTabNav from '../navigation/BottomTabNav';
import Stream from '../Screens/Stream';
import Movies from '../Screens/MoviesS';
import DownloadSettings from '../Screens/DownloadSettings';
import navigationString from './navigationString';



function HeaderStackScreen(Stack) {
    return (
        <>
            <Stack.Screen name={navigationString.BOTTOM} component={BottomTabNav} />
            <Stack.Screen name={navigationString.HEADER} component={Header} options={{ headerShown: false }} />
            <Stack.Screen name={navigationString.SETTING} component={Setting} />
            <Stack.Screen name={navigationString.STREAM} component={Stream} />
            <Stack.Screen name={navigationString.MOVIES} component={Movies} />
            <Stack.Screen name={navigationString.DOWNLOADSETTING} component={DownloadSettings}/>
            
        </>
    )
}
export default HeaderStackScreen