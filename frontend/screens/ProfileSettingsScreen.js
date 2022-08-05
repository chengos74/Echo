import { Input } from '@rneui/base';
import { Avatar, Button, Overlay, withTheme } from '@rneui/themed';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileSettingsScreen = ({ route, navigation }) => {

  const { pseudo } = route.params; // reçoit le nom de l'utilisateur depuis le profile
  const { profilePicture } = route.params; // reçoit la photo de profil de l'utilisateur depuis le profile
  const { desc } = route.params; // reçoit la description de l'utisateur depuis le profile
  const [visible, setVisible] = useState(false);

  // affiche l'overlay
  const toggleOverlay = () => {
    setVisible(!visible);
  }
  console.log(route)
  return (
    <View style={{ flex: 1, backgroundColor: '#151515', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, width: '90%', }}>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20 }}>cancel</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Modify profile</Text>
        <TouchableOpacity>
          <Text style={{ color: '#67D692', fontSize: 20, fontWeight: 'bold' }}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', top: 30, }}>
        <Avatar
          rounded
          source={profilePicture} // photo de profil de l'utilisateur
          size={94}
        />
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18, top: 10 }}>{pseudo}</Text>
      </View>
      <View style={{ top: 60, }}>
        <View style={{flex: 1 ,justifyContent: 'space-evenly', bottom: 50}}>
          <View>
            <TouchableOpacity style={{ height: 42, backgroundColor: '#7E7E7E', borderRadius: 10, width: 300 }}
              onPress={toggleOverlay}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text style={{ color: '#fff', alignSelf: 'center', top: 10, fontSize: 16, left: 10 }}>Change username : </Text>
                <Text style={{ color: '#DBDBDB', alignSelf: 'center', top: 11, left: 10 }}>{pseudo}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', }}>
              <Overlay
                overlayStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 100,
                  width: 300,
                  backgroundColor: 'black'
                }}
                isVisible={visible}
                onBackdropPress={toggleOverlay}
              >
                <View style={{ alignItems: 'center', width: 200, flexDirection: 'row', justifyContent: 'center', top: 10, }}>
                  <Input
                    label={'New username :'}
                    labelStyle={{ color: 'white' }}
                    style={{ width: '100%' }}
                    inputStyle={{ color: 'white' }}
                    placeholder={pseudo}
                    ></Input>
                    <Button 
                      buttonStyle={{
                        backgroundColor: '#348A55', 
                        borderRadius: 10}} 
                      titleStyle={{color: '#FFF'}}
                      onPress={toggleOverlay}
                      >
                      Done
                    </Button>
                </View>
              </Overlay>
            </View>
          </View>
          
          <View>
            <TouchableOpacity style={{ height: 42, backgroundColor: '#7E7E7E', borderRadius: 10, width: 300 }}
              onPress={toggleOverlay}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text style={{ color: '#fff', alignSelf: 'center', top: 10, fontSize: 16, left: 10 }}>Change description : </Text>
                <Text style={{ color: '#DBDBDB', alignSelf: 'center', top: 11, left: 10 }}>{desc}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', }}>
              <Overlay
                overlayStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 100,
                  width: 300,
                  backgroundColor: 'black'
                }}
                isVisible={visible}
                onBackdropPress={toggleOverlay}
              >
                <View style={{ alignItems: 'center', width: 300, flexDirection: 'row', justifyContent: 'center', top: 10, }}>
                  <Input
                    label={'New description :'}
                    labelStyle={{ color: 'white' }}
                    style={{ width: '100%' }}
                    inputStyle={{ color: 'white' }}
                    placeholder={'description'}
                    ></Input>
                    <Button 
                      buttonStyle={{
                        backgroundColor: '#348A55', 
                        borderRadius: 10}} 
                      titleStyle={{color: '#FFF'}}
                      onPress={toggleOverlay}
                      >
                      Done
                    </Button>
                </View>
              </Overlay>
            </View>
          </View>
        </View>

      </View>
    </View>
  )
}
export default ProfileSettingsScreen;
