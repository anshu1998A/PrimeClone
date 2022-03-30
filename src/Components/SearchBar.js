import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React from 'react';
import Styles from '../styles/secondStyle';

export default function SearchBar() {

    return (

        <View style={Styles.searchView}>
            <Image source={require('../assets/images/ICONS/search.png')} style={Styles.searchBar}></Image>
            <TextInput placeholder='Search by actor, tittle.....' placeholderTextColor={'grey'} style={Styles.searchText}></TextInput>
            <Image source={require('../assets/images/ICONS/microphone.png')} style={Styles.searchBar}></Image>
        </View>
    )
}