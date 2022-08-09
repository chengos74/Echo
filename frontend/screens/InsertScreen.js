import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Insert(props) {
  return (
    <View>
      <Button
      title='Camera'
      onPress={() => {props.navigation.navigate("CameraScreen", { screen: "CameraScreen" });}}
      >
      </Button>
        <Text>Insert</Text>
    </View>

  )
}
