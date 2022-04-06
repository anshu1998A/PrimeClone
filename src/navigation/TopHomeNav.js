import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screens/Home';
import HomeStyle from '../styles/homePageStyle';
import imagePath from '../constants/imagePath';
import navigationString from './navigationString';
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
            <TopTab.Navigator screenOptions={{ swipeEnabled: false, tabBarLabelStyle: { fontSize: 12,  fontWeight:'500' }, tabBarStyle: { backgroundColor: '#232F3E' }, tabBarActiveTintColor:'white', tabBarInactiveTintColor:'white' }} >
                <TopTab.Screen name={navigationString.HOME} component={Home} headerTintColor={'red'} />
                <TopTab.Screen name={navigationString.TVSHOWS} component={Home} />
                <TopTab.Screen name={navigationString.TOP_MOVIES} component={Home} />
                <TopTab.Screen name={navigationString.KIDS} component={Home} />
            </TopTab.Navigator>
        </>

    )
}