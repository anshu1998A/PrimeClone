import { View, Text,FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Styles from '../styles/secondStyle';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import imagePath from '../constants/imagePath';


const Language = [
    {
      id: '1',
      title: 'English',
    },
    {
      id: '2',
      title: 'Hindi',
    },
    {
      id: '3',
      title: 'Telugu',
    },
    {
      id: '4',
      title: 'Tamil',
    },
    {
        id: '5',
        title: 'Kannada'
    },

  ];

  const SeMore = ()=>{
    return(
      <FlatList
    data={Language}
    renderItem={(element) => {
      return (
      <>
        <View style={Styles.listViewStyle}>
          <Text style={Styles.listStyle}>{element.item.title}</Text>
          <Image source={imagePath.rightarrow} style={Styles.arrowStyle}></Image>
        </View>
        <Divider/>
        </>
      )
    }}
    />
    )
  }
 
export default function Language1() {
  const [text,setText] = useState('See More')
  function SeeMore(){
    if(text==='See More')

    setText("")

  }
  return (
      <View style={Styles.languageStyle}>
    <View style={Styles.listMarginStyle}>
      <Text style={Styles.textStyle}>Languages</Text>
      <Divider />
    </View>
    <FlatList
    data={Language}
    renderItem={(element) => {
      return (
      <>
        <View style={Styles.listViewStyle}>
          <Text style={Styles.listStyle}>{element.item.title}</Text>
          <Image source={imagePath.rightarrow} style={Styles.arrowStyle}></Image>
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