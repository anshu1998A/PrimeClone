import {
    SafeAreaView,
    Text,
    ScrollView,
    View
  } from 'react-native';
  import React from 'react';
  import Styles from '../styles/secondStyle'
  import SearchBar from '../Components/SearchBar';
  import Browse from '../Components/Browse';
  import List from '../Components/List';
  import Language from '../Components/Language';
  import { StatusBar } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  const Search = ({navigation}) => {
    return (  
            <LinearGradient
            colors={['#1CB5E0', '#000046']}
            start={{ x: -0.9, y: 0.2 }}
            end={{ x: 0.5, y: 0.7 }}
            style={Styles.linearGradient}>
              <StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
              <SafeAreaView style={{ flex: 1}}>
              <ScrollView >
            <SearchBar />
            <Browse navigation={navigation}/>
            <List />
            <Language/>
            </ScrollView>
            </SafeAreaView>
            </LinearGradient>
           
           
     
    
    );
  };
  export default Search;
  
  