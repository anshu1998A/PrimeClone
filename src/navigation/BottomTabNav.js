import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {Image} from 'react-native';
import Channel from '../Screens/Channel';
import Downloads from '../Screens/Downloads';
import SearchScreen from '../Screens/Search';
import MyStuff from '../Screens/MyStuff';
import HomeTab from './TopHomeNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import imagePath from '../constants/imagePath';


const Tab = createBottomTabNavigator()

const BottomTabNav = () =>{
  return (


    <Tab.Navigator initialRouteName='Home'
    tabBarOptions={{
       activeBackgroundColor: 'black',
       inactiveBackgroundColor: 'black',
           style: {
                 backgroundColor: 'red',
                 paddingBottom: 3
           }
    }}>
        <Tab.Screen  name="Home" component={HomeTab} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={imagePath.home} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey',}}/>
        )
      }} />
        <Tab.Screen name="Channel" component={Channel} options={{tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={imagePath.menu} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )
      }}/>
        <Tab.Screen name="Find" component={SearchScreen} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={imagePath.search} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="Downoads" component={Downloads} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={imagePath.download} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="My Stuff" component={MyStuff} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={imagePath.profileIcon} style={{ height:25,width:25, }}/>
        )}}/>
    </Tab.Navigator>
 
  )
}

export default BottomTabNav