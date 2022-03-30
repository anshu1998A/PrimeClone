import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,Text,Image
} from 'react-native';
import HeaderStackScreen from './src/navigation/StackNav'
// import 'react-native-gesture-handler';


const App = () => {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
    <NavigationContainer>
    <HeaderStackScreen />
    </NavigationContainer>
    </>
  )
};
export default App;
