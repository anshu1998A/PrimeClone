import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React from 'react';
import Styles from '../styles/secondStyle';
import imagePath from '../constants/imagePath';


export default function SearchBar() {

    return (

        <View style={Styles.searchView}>
            <Image source={imagePath.searchIcon} style={Styles.searchBar}></Image>
            <TextInput placeholder='Search by actor, tittle.....' placeholderTextColor={'grey'} style={Styles.searchText}></TextInput>
            <Image source={imagePath.microPhone} style={Styles.searchBar}></Image>
        </View>
    )
}