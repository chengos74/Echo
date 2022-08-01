import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CameraType, WhiteBalance } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRotate, faCircle, faBolt } from '@fortawesome/free-solid-svg-icons'

//-----IMPORT CAMERA EXPO-----//
import { Camera } from 'expo-camera';

export default function CameraScreen() {

  // State qui passe à true si on autorise l'accès à la caméra
  const [hasPermission, setHasPermission] = useState(false);
  // State qui gère le type de caméra
  const [type, setType] = useState(CameraType.back);
  // State qui gère le flash
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off); // off de base

  const isfocused = useIsFocused();

  var cameraRef = useRef(null); // pointera vers la balise camera


  // ce useEffect reçoit l'autorisationd d'accès à la camera au chargemement du Screen Camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted')
    })();
  }, []);

  // contient toute la balise camera
  var cameraDisplay;

  if (hasPermission && isfocused) {

    cameraDisplay =

      <Camera style={{ flex: 1 }} type={type} flashMode={flash} ref={ref => (cameraRef = ref)}>
        <View style={{
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          marginBottom: 20,
        }}>

          <TouchableOpacity
            style={{ alignSelf: 'flex-end', alignItems: 'center', marginRight: 20, }}
            onPress={() => {
              setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)
            }}
          >
            <FontAwesomeIcon icon={faBolt} size={34} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: 'flex-end', alignItems: 'center', marginRight: 20, }}
            onPress={() => {

            }}
          >
            <FontAwesomeIcon icon={faCircle} size={64} color={'white'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: 'flex-end', alignItems: 'center', marginRight: 20, }}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}
          >
            <FontAwesomeIcon icon={faCameraRotate} size={34} color={'white'} />
          </TouchableOpacity>

        </View>
      </Camera >
  } else { cameraDisplay = <View style={{ flex: 1 }} />; }


  return (
    <View style={{ flex: 1 }}>
      {cameraDisplay}
    </View>
  )
};


