import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import {Image} from 'react-native';
import Channel from '../Screens/Channel';
import Downloads from '../Screens/Downloads';
import SearchScreen from '../Screens/Search';
import MyStuff from '../Screens/MyStuff';
import HomeTab from './TopHomeNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()

const BottomTabNav = () =>{
  return (
    <Tab.Navigator 
    tabBarOptions={{
       activeBackgroundColor: 'black',
       inactiveBackgroundColor: 'black',
           style: {
                //  backgroundColor: 'black',
                 paddingBottom: 3
           }
    }}>
        <Tab.Screen  name="Home" component={HomeTab} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../assets/images/MoviesImages/MenuIcons/home.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey',}}/>
        )
      }} />
        <Tab.Screen name="Channel" component={Channel} options={{tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../assets/images/MoviesImages/MenuIcons/menu.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )
      }}/>
        <Tab.Screen name="Find" component={SearchScreen} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../assets/images/MoviesImages/MenuIcons/search.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="Downoads" component={Downloads} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../assets/images/MoviesImages/MenuIcons/download.png')} style={{ height:25,width:25, tintColor:focused?'#00A8E1':'grey'}}/>
        )}}/>
        <Tab.Screen name="My Stuff" component={MyStuff} options={{ tabBarLabelStyle:{color:'#00A8E1'}, headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../assets/images/MoviesImages/MenuIcons/profile.png')} style={{ height:25,width:25, }}/>
        )}}/>
    </Tab.Navigator>
 
  )
}

export default BottomTabNav