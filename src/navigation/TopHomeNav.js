import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';
import HomeStyle from '../styles/homePageStyle';
import imagePath from '../constants/imagePath';
const TopTab = createMaterialTopTabNavigator();
export default function HomeTab() {
    return (
        <>
            <View>
                <View style={{ backgroundColor: '#232F3E' }}>
                    <Text style={HomeStyle.PMImage}>prime video</Text>
                    <Image style={HomeStyle.logoStyle} source={imagePath.smile}></Image>
                </View>
            </View>
            <TopTab.Navigator screenOptions={{ swipeEnabled: false }} style={{backgroundColor:'#232F3E'}} >
                <TopTab.Screen name='Home' component={Home} />
                <TopTab.Screen name='TVShows' component={Home} />
                <TopTab.Screen name='Movies' component={Home} />
                <TopTab.Screen name='Kids' component={Home} />
            </TopTab.Navigator>
        </>

    )
}