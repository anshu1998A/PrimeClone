import React from 'react'
import {Text, Image, View, SafeAreaView, StatusBar} from 'react-native'
import HomeStyle from '../styles/homePageStyle'
import imagePath from '../constants/imagePath';
import DropDown from '../Components/DropDown';



function Downloads() {
  return (
<>
<StatusBar barStyle='light-content' backgroundColor={"black"}> </StatusBar>
   <SafeAreaView  style={{backgroundColor:"#232F3E"}}>
     <View style={HomeStyle.DownloadView}>
     <Text style={HomeStyle.downloadStyle}>Downloads</Text>
     </View>
     <View style={HomeStyle.downloadImage}>
     <Image source={imagePath.downloadImg} style={{height:150, width:150}}></Image>
     <Text style={HomeStyle.subTextStyle}>No videos downloaded</Text>
     
     <Text style={{color:'darkgrey', marginTop:15, fontSize:18}}>Downloads settings {`>`}</Text>
     {/* <DropDown/> */}
      </View>
      
   </SafeAreaView>
   </>
  )
}

export default Downloads