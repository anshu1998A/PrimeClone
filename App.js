
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/navigation/Route';
import 'react-native-gesture-handler';
import store from './src/redux/Store';
import { Provider } from 'react-redux';

const App = () => {
  
  return (
    <>
    <Provider store={store}>
    <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
    <Routes/>
    </Provider>
    </>
  )
};
export default App;
