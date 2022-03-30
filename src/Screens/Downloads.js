import React from 'react'
import {Text, Image, View} from 'react-native'
import HomeStyle from '../styles/homePageStyle'
import imagePath from '../constants/imagePath'

function Downloads() {
  return (

   <View >
     <View style={HomeStyle.DownloadView}>
     <Text style={HomeStyle.downloadStyle}>Downloads</Text>
     </View>
     <View style={HomeStyle.downloadImage}>
     <Image source={imagePath.downloadImg} style={{height:150, width:150}}></Image>
     <Text style={HomeStyle.subTextStyle}>No videos downloaded</Text>
     <Text style={{color:'darkgrey', marginTop:15, fontSize:18}}>Downloads settings {`>`}</Text>
      </View>
      
   </View>
  )
}

export default Downloads