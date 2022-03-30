import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Styles from '../styles/secondStyle'

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
export default function Browse() {
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
                <Text style={Styles.textGerne} numberOfLines={2}>{element.item.title}</Text>
                
              </View>
            )
          }}
          numColumns={2} />
      </View>
    </View>
  )
}