import { Input } from '@rneui/base';
import { Avatar } from '@rneui/themed';
import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileSettingsScreen = ({ route, navigation }) => {

  const { pseudo } = route.params; // reçoit le nom de l'utilisateur depuis le profile
  const { profilePicture } = route.params; // reçoit la photo de profil de l'utilisateur depuis le profile
  const { desc } = route.params; // reçoit la description de l'utisateur depuis le profile
  const [visible, setVisible] = useState(false);


  // array pour la FLatlist
  const data = [
    {
      userName: pseudo,
      profilePicture: profilePicture,
      desc: desc
    }
  ];

  // TopBar (cancel, modify, Done)
  const header =
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60, width: '90%', alignSelf: 'center' }}>
      <TouchableOpacity onPress={() => { navigation.goBack() }} >
        <Text style={{ color: 'white', fontSize: 20 }}>cancel</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Modify profile</Text>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Text style={{ color: '#67D692', fontSize: 20, fontWeight: 'bold' }}>Done</Text>
      </TouchableOpacity>
    </View>

  // Header de la flatlist (photo de profil)
  const headerListComponent = () => {
    return (

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        marginBottom: 80,
      }}>
        <Avatar
          rounded
          source={profilePicture} // photo de profil de l'utilisateur
          size={112}
        />
        <TouchableOpacity >
          <Text style={{ color: '#67D692', textAlign: 'center', fontWeight: 'bold', fontSize: 18, top: 10 }}>Change photo</Text>
        </TouchableOpacity>

      </View>
    )
  };

  // item de la flatlist
  const userItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ height: 1, width: '100%', backgroundColor: '#242424', marginBottom: 10 }} />

        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'baseline', width: '70%', justifyContent: 'center' }}>
          <Text style={{ color: '#67D692', fontSize: 18 }}>Username : </Text>
          <Input placeholder={item.userName} placeholderTextColor='white' inputStyle={{ color: 'white' }} defaultValue={item.userName} ></Input>
        </View>

        <View style={{ height: 1, width: '100%', backgroundColor: '#242424', marginBottom: 10 }} />

        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', width: '70%', justifyContent: 'center' }}>
          <Text style={{ color: '#67D692', fontSize: 18 }} >Description : </Text>
          <Input
            defaultValue={item.desc}
            placeholder={item.desc}
            placeholderTextColor='white'
            inputStyle={{ color: 'white' }}
            multiline
            numberOfLines={4}
            textAlignVertical='top'
            maxLength={90} ></Input>
        </View>

        <View style={{ height: 1, width: '100%', backgroundColor: '#242424' }} />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#151515', }}>

      {header}

      <FlatList
        data={data}
        renderItem={userItem}
        ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
        ListHeaderComponent={headerListComponent}
      >
      </FlatList>

    </View>
  )
}
export default ProfileSettingsScreen;
