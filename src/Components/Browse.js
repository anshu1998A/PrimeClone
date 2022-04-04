import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Styles from '../styles/secondStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Stream from '../Screens/Stream';
import Movies from '../Screens/MoviesS';


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

// click on flatList

function select(tittle){

  switch (tittle.id) 
  {
    case '1':
      navigation.navigate('Movies')
      break;
default:
        console.log(tittle.tittle)
}
}



  return (
    <View style={{marginLeft:20}}>
      <View style={Styles.marginStyle}
      
      
      >
        <Text style={Styles.textStyle}>Browse by</Text>
      </View>
      <View>
        <FlatList
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={(element) => {
            return (
              <View style={Styles.gridView}>
                <TouchableOpacity onPress={() => select(element.item)}>
                <Text style={Styles.textGerne} numberOfLines={2}>{element.item.title}</Text>
                </TouchableOpacity>
                
              </View>
            )
          }}
          numColumns={2} />
      </View>
    </View>
  )
}