import { View, Text,FlatList, Image } from 'react-native'
import React from 'react';
import { useState } from 'react';
import Styles from '../styles/secondStyle';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';
import homePageStyle from '../styles/homePageStyle';


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

  const SeMore = ()=>{
  
  return(
    <FlatList
    data={List1}
    renderItem={(element) => {
      return (
        <>
        <View style={homePageStyle.listViewStyle}>
          <Text style={homePageStyle.listStyle}>{element.item.title}</Text>
          <Image source={imagePath.rightarrow} style={homePageStyle.arrowStyle}></Image>
        </View>
        <Divider/>
        </>
      )
    }}
    />
  )
  }

export default function List() {
  const [text,setText] = useState('See More')

  function SeeMore(){
    if(text==='See More')
    setText("")

  }
  return (
      <View style={homePageStyle.listStyle1}>
    <View style={homePageStyle.listMarginStyle}>
      <Text style={homePageStyle.textStyle}>Genres</Text>
      <Divider />
    </View>
    <FlatList
    data={List1}
    renderItem={(element) => {
      return (
        <>
        <View style={homePageStyle.listViewStyle}>
          <Text style={homePageStyle.listStyle}>{element.item.title}</Text>
          <Image source={imagePath.rightarrow} style={homePageStyle.arrowStyle}></Image>
        </View>
        <Divider/>
        </>
      )
    }}
    />
    {
      text?null:<SeMore/>
    }
    <TouchableOpacity onPress={SeeMore}>
    <Text style={Styles.style1}>{text}</Text>

    </TouchableOpacity>
    </View>
  )
}