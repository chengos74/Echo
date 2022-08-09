import { View, Text, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons'

export default function imagePublicationAccount({ route, navigation: { goBack } }) {
    
    const { image } = route.params;
    const { like } = route.params;
    // console.log("information" + JSON.stringify(route));

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

  return (
    <View>
      <TouchableOpacity onPress={() => goBack()}>
          <ImageBackground source={image} style={{ flex: 1, width: deviceWidth, height: deviceHeight}} />
          <FontAwesomeIcon icon={faEye} size={30} color="#FFFFFF" style={{
              marginLeft: 20, justifyContent: 'flex-end', position: 'absolute', top: 750, left: 5
          }} />
        <Text style={{ position: 'absolute', top: 758, left: 60, color: '#FFFFFF', fontSize: 12 }}> {like}</Text>
      </TouchableOpacity>
    </View>
  )
}