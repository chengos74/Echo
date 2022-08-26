import React, { useState, useEffect, useRef } from 'react'
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { CameraType } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRotate, faCircle, faBolt, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

//-----IMPORT CAMERA EXPO-----//
import { Camera } from 'expo-camera';

function CameraScreen(props) {

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
                <View style={{ flex: 1 }}>

                    <View style={{ marginTop: 50 }} >
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            title='Back'
                            onPress={() => { props.navigation.goBack(); }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} size={35} color={'white'} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 50, margin: 20}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'space-between'
                            }}>
                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', alignItems: 'center', }}
                                onPress={() => {
                                    setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off)
                                }}
                            >
                                <FontAwesomeIcon icon={faBolt} size={34} color={'white'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', alignItems: 'center', }}

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
                                        const ip = "192.168.43.223"; // a changer par sa propre ip
                                        const ipSpaces = "172.20.10.5"

                                        // réponse du backend
                                        // let response = await fetch("http://" + ip + ":3000/camera", {
                                        let response = await fetch("https://echoproject-api.herokuapp.com/camera", {
                                            method: 'POST',
                                            body: dataPhoto,
                                        });
                                        let photoBackend = await response.json()
                                        console.log(photoBackend.uri);
                                        // envoie de l'uri de la photo au reducer puis au store
                                        props.onSnap(photoBackend.photo);
                                        
                                        // on redirige vers les paramètres d'une publication
                                        if(photoBackend != null){
                                            props.navigation.navigate("PParams", { screen: "PParams" });
                                        }
                                    }
                                }
                                }
                            >
                                <FontAwesomeIcon icon={faCircle} size={64} color={'white'} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', alignItems: 'center', }}
                                onPress={() => {
                                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                                }}
                            >
                                <FontAwesomeIcon icon={faCameraRotate} size={34} color={'white'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </Camera >
    } else { cameraDisplay = <View style={{ flex: 1 }} />; }


    return (
        <View style={{ flex: 1 }}>
            {cameraDisplay}
        </View>
    )
};


function mapDispatchToProps(dispatch){
    return {
        onSnap: function(uriFromFront){
        dispatch({type: 'snap', uri: uriFromFront});
        }
    };
};

export default connect (null, mapDispatchToProps)(CameraScreen);