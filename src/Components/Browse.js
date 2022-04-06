import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Styles from '../styles/secondStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Stream from '../Screens/Stream';
import Movies from '../Screens/MoviesS';
import navigationString from '../navigation/navigationString';
import homeStyle from '../styles/homePageStyle';


// FlatList data for options----------
const DATA = [
  {
    id: '1',
    title: 'Movies',
    

  },
  {
    id: '2',
    title: 'Amazon \n Originals',
    
  },
  {
    id: '3',
    title: 'TV',
  },
  {
    id: '4',
    title: 'Kids',
  },
];
export default function Browse({navigation}) {

// ---------------------------------------------------------------click on flatList------------------------------------------------

function select(tittle){

  switch (tittle.id) 
  {
    case '1':
      navigation.navigate(navigationString.MOVIES)
      break;
default:
        console.log(tittle.tittle)
}
}



  return (
    <View style={{marginLeft:20}}>
      <View style={homeStyle.marginStyle}
      
      
      >
        <Text style={homeStyle.textStyle}>Browse by</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={(element) => {
            return (
              <View style={homeStyle.gridView}>
                <TouchableOpacity onPress={() => select(element.item)}>
                <Text style={homeStyle.textGerne} numberOfLines={2}>{element.item.title}</Text>
                </TouchableOpacity>
                
              </View>
            )
          }}
          numColumns={2} />
      </View>
    </View>
  )
}