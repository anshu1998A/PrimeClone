import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import homeStyle from '../styles/homePageStyle';
import { Divider } from 'react-native-elements';
import imagePath from '../constants/imagePath';
import navigationString from '../navigation/navigationString';


function Header({ navigation }) {

    return (
        <View>
            <LinearGradient
                colors={['#1CB5E0', '#000046']}
                start={{ x: -0.9, y: 0.2 }}
                end={{ x: 0.5, y: 0.7 }}>
                <SafeAreaView >
                    <TouchableOpacity>
                        <View style={homeStyle.profileView}>
                            <TouchableOpacity >
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Image source={imagePath.profileIcon} style={homeStyle.profileImageStyle}></Image>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Text style={homeStyle.profileName}>Anshu</Text>

                                        <Image source={imagePath.expandArrow} style={homeStyle.expandArrow}></Image>
                                    </View >
                                </View>
                            </TouchableOpacity>
                            <View style={homeStyle.settingStyle}>
                                <TouchableOpacity onPress={() => { navigation.navigate(navigationString.SETTING) }} >
                                    <Image source={imagePath.settingIcon} style={homeStyle.settingIcon}>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View >
                    </TouchableOpacity>
                    <View style={homeStyle.watchView} >
                        <Text style={homeStyle.watchText}>Watchlist</Text>
                    </View>

                    <Divider width={1} />
                    <View style={homeStyle.subView}>
                        <Text style={homeStyle.videoText}>your videos</Text>
                        <TouchableOpacity >
                            <View style={homeStyle.filterView}>
                                <Text style={{ color: 'white' }}>Filter</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </LinearGradient>
            {/* <DownloadedV/> */}
        </View>
    )
}

export default Header