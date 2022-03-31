import React from 'react';
import { Text, ScrollView, View, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../styles/secondStyle';
import SettingData from '../DataDetails/SettingData';
import { Divider } from 'react-native-elements';

export function setting({navigation}) {
  
function click(tittle)
{
console.log(tittle.key)

  switch (tittle.key) 
  {
    case '1':
      navigation.navigate("Stream")
      break;

    case '2':
      navigation.navigate('Stream')
      break;

    case '3':
      navigation.navigate('Stream')
      break;
    case '4':
      navigation.navigate('Stream')
      break;
    case '5':
      navigation.navigate('Stream')
      break;
    case '6':
      navigation.navigate('Stream')
      break;
    case '7':
      navigation.navigate('Stream')
      break;
    case '8':
      navigation.navigate('Stream')
      break;
    case '9':
      navigation.navigate('Stream')
      break;
    case '10':
      navigation.navigate('Stream')
      break;
    case '11':
      navigation.navigate('Stream')
      break;
    case '12':
      navigation.navigate('Stream')
      break;
      default:
        console.log(tittle.tittle)
  }
}
  return (
    <LinearGradient
      colors={['#1CB5E0', '#000046']}
      start={{ x: -0.9, y: 0.2 }}
      end={{ x: 0.5, y: 0.7 }}
      style={Styles.linearGradient}>
      <SafeAreaView>
        <View style={Styles.HeaderView}>
          <Text style={Styles.HeaderText}>Settings</Text>
        </View>
        <View>
          <FlatList
            data={SettingData}
            renderItem={(element) => {
              return (
                <View>
                  <TouchableOpacity onPress={()=>click(element.item)}>
                    <View >
                      <View style={Styles.tittleView}>
                        <Text style={Styles.settingDataTittle}> {element.item.tittle}</Text>
                      </View>
                      <View style={Styles.detailsView}>
                        <Text style={Styles.settingDataDetails}> {element.item.details}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <Divider style={{ marginLeft: 20 }} />
                </View>
              )
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

