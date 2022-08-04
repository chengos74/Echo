
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Animated, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Status = ({ route, navigation }) => {

    const { name } = route.params; // reçoit le nom de l'utilisateur depuis le StoryComponent
    const { profilePicture } = route.params; // reçoit la photo de profil de l'utilisateur depuis le StoryComponent
    const { image } = route.params; // reçoit la photo de l'utisateur depuis le StoryComponent 

    // ce useEffect se délenche au chargement du composant
    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack(); // retour automatique à la page précédente au bout de 5s
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => clearTimeout(timer); // reset du timer
    }, []);

    // State qui permet l'interpolation des valeurs de la barre de progression (point de départ de la barre)
    const [progress, setProgress] = useState(new Animated.Value(0));

    // animation de la barre de progression
    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
    });

    return (
        <View
            style={{
                backgroundColor: '#151515',
                height: '100%',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View
                style={{
                    height: 3,
                    width: '95%',
                    borderWidth: 1,
                    backgroundColor: 'gray',
                    position: 'absolute',
                    top: 18,
                }}>
                <Animated.View
                    style={{
                        marginTop: 50,
                        height: '100%',
                        backgroundColor: 'white',
                        width: progressAnimation,
                    }}>
                </Animated.View>
            </View>
            <View
                style={{
                    marginTop: 50,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 12,
                    left: 0,
                    width: '90%',
                }}>
                <View
                    style={{
                        borderRadius: 100,
                        width: 30,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        source={profilePicture}
                        style={{
                            borderRadius: 100,
                            backgroundColor: 'orange',
                            resizeMode: 'cover',
                            width: '92%',
                            height: '92%',
                        }}
                    />
                </View>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '100%',
                    }}>
                    <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>
                        {name}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon
                            icon={faClose}
                            style={{ fontSize: 25, color: 'white', opacity: 0.9 }}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={image}
                style={{ position: 'absolute', width: '100%', height: 600 }}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 30,
           
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginVertical: 10,
                    width: '90%',
                }}>
                <TextInput
                    placeholder="send message"
                    placeholderTextColor="grey"
                    style={{
                        borderColor: 'white',
                        borderRadius: 25,
                        width: '85%',
                        height: 50,
                        paddingLeft: 20,
                        borderWidth: 1,
                        fontSize: 20,
                        color: 'white',
                        marginRight: 10,
                    }}
                />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: 30, color: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Status;