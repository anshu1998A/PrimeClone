import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Styles from '../styles/secondStyle';
import imagePath from '../constants/imagePath';
import homeStyle from '../styles/homePageStyle';


export default function SearchBar() {

    return (

        <View style={homeStyle.searchView}>
            <Image source={imagePath.searchIcon} style={homeStyle.searchBar}></Image>
            <TextInput placeholder='Search by actor, tittle.....' placeholderTextColor={'grey'} style={homeStyle.searchText}></TextInput>
            <TouchableOpacity onPress={() => Alert.alert('Microphone Permission is not allowed')}>
            <Image source={imagePath.microPhone} style={homeStyle.searchBar}></Image>
            </TouchableOpacity>
        </View>
    )
}