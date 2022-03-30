import { View, Text,FlatList, Image } from 'react-native'
import React from 'react';
import Styles from '../styles/secondStyle';
import { Divider } from 'react-native-elements/dist/divider/Divider';


const List1 = [
    {
      id: '1',
      title: 'Drama',
    },
    {
      id: '2',
      title: 'Action and adventure',
    },
    {
      id: '3',
      title: 'romance',
    },
    {
      id: '4',
      title: 'Comedy',
    },
    {
        id: '5',
        title: 'Thriller'
    },

  ];
export default function List() {
  return (
      <View style={{marginLeft:20, marginRight:20, marginBottom:20}}>
    <View style={Styles.listMarginStyle}>
      <Text style={Styles.textStyle}>Genres</Text>
      <Divider />
    </View>
    <FlatList
    data={List1}
    renderItem={(element) => {
      return (
        <>
        <View style={Styles.listViewStyle}>
          <Text style={Styles.listStyle}>{element.item.title}</Text>
          <Image source={require('../../assets/images/ICONS/rightArrow.png')} style={Styles.arrowStyle}></Image>
        </View>
        <Divider/>
        </>
      )
    }}
    // numColumns={2}
    />
    <Text style={Styles.style1}>See More</Text>
    </View>
  )
}