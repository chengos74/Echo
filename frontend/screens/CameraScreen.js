import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CameraType, VideoQuality, WhiteBalance } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRotate, faCircle, faBolt } from '@fortawesome/free-solid-svg-icons'

//-----IMPORT CAMERA EXPO-----//
import { Camera } from 'expo-camera';

export default function CameraScreen(props) {

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

            onPress={async () => {

              if (cameraRef) {
                let photo = await cameraRef.takePictureAsync({
                  quality: 0.7,
                  base64: true,
                  exif: true,
                });

                // création d'un fichier qui contient la photo
                let dataPhoto = new FormData();
                dataPhoto.append('photo', {
                  uri: photo.uri,
                  type: 'image/jpeg',
                  name: 'user_photo.jpg',
                });
                
                //-----CODE POUR ENREGISTRER UNE VIDEO, FONCTIONNEL-----//
                // il reste à choisir la manière d'enregistrer une vidéo d'un point de vue UI/UX
                
                // let video = await cameraRef.recordAsync({
                //   codec : VideoCodec[JPEG],
                //   maxDuration : 3,
                //   quality : VideoQuality['720p'],
                // });

                // // création d'un fichier qui contient la vidéo 
                // let dataVideo = new FormData();
                // dataVideo.append('video', {
                //   uri: video.uri,
                //   type: 'video/mov',
                //   name : 'user_video.mov'
                // })
                // console.log(dataVideo);

                //-----FIN DU CODE POUR ENREGISTRER UNE VIDEO, FONCTIONNEL-----//

                // IP adress partage de connexion
                const ip = "172.20.10.5";

                // réponse du backend
                await fetch("http://" + ip + ":3000/camera", {
                  method: 'POST',
                  body: dataPhoto,
                });
              }
            }
            }
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


