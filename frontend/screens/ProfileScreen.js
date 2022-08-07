import React from 'react';
import { View } from 'react-native';
import ProfileComponent from '../screenComponents/ProfileComponent';

export default function ProfileScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#151515'}}>
      <ProfileComponent />
    </View>
  )
}
