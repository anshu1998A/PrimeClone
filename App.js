
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/navigation/Route';
import 'react-native-gesture-handler';

const App = () => {
  
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
    <Routes/>
    </>
  )
};
export default App;
