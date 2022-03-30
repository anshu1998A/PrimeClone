import React from 'react';
import { Text, ScrollView, View, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../styles/secondStyle';
import SettingData from '../DataDetails/SettingData';
import { Divider } from 'react-native-elements';

export function setting({navigation}) {
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
                <TouchableOpacity onPress={element.item.tittle === "Signed in as Anshu" ? () => navigation.navigate('LogIn') : null}>
                <View >
                  <View style={Styles.tittleView}>
                    <Text style={Styles.settingDataTittle}> {element.item.tittle}</Text>
                  </View>
                  <View style={Styles.detailsView}> 
                  <Text style={Styles.settingDataDetails}> {element.item.details}</Text>
                  </View>
                </View>
                </TouchableOpacity>
                <Divider style={{marginLeft:20}}/>
                </View>
              )
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

