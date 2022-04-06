import React , {useState}from 'react';
import { Text, ScrollView, View, FlatList, TouchableOpacity ,Switch,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../styles/secondStyle';
import ToggleButton from '../Components/ToggleButton';
import { Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/Actions/auth';

function Setting({ navigation }) {

  function click(tittle) {
    console.log(tittle.key)

    switch (tittle.key) {
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
        navigation.navigate('LogIn')
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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 const dispatch= useDispatch()

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
        <ScrollView>
          <View style={Styles.tittleView}>
            <Text style={Styles.settingDataTittle}> Stream {`&`} download </Text>
            <Text style={Styles.settingDataDetails}> Manage quality and Wi-Fi</Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Notifications </Text>
            <Text style={Styles.settingDataDetails}> On </Text>
            <Divider style={Styles.dividerSetting} />

            <View style={{flexDirection:"row"}}>
            <View style={{flex:0.85}}>
              <Text style={Styles.settingDataTittle}> Auto Play</Text>
              <Text style={Styles.settingDataDetails}> Play the next episode automatically</Text>
            </View>
            <ToggleButton/>
            </View>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Parental Controls </Text>
            <Text style={Styles.settingDataDetails}> Control what you can watch</Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Registered devices </Text>
            <Text style={Styles.settingDataDetails}> See all Registered </Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Clear video search history </Text>
            <Divider style={Styles.dividerSetting} />


            <TouchableOpacity onPress={()=> dispatch(logOut()) }>
           <Text style={Styles.settingDataTittle}> Signed in as Anshu </Text>
            <Text style={Styles.settingDataDetails}> Sign out of all Amazon apps  </Text>
            <Divider style={Styles.dividerSetting} />
            </TouchableOpacity>

            <Text style={Styles.settingDataTittle}> Manage your Prime Video Channels </Text>
            <Text style={Styles.settingDataDetails}> View or change your  </Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Hidden videos </Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> language </Text>
            <Text style={Styles.settingDataDetails}> English  </Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> Help {`&`} Feedback </Text>
            <Divider style={Styles.dividerSetting} />

            <Text style={Styles.settingDataTittle}> About {`&`} Legal </Text>
            <Divider style={Styles.dividerSetting} />

            {/* <FlatList
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
          /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Setting
