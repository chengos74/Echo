import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Stories = () => {
    const navigation = useNavigation();

    const storyInfo = [
        {
            idStory: 1,
            name: 'Your Story',
            profilePicture: require('../assets/profilePicture/userPicture1.jpg'),
            picture: require('../assets/photo/photo1.jpg'),
            isWatched: false,
        },
        {
            idStory: 0,
            name: 'Tom',
            profilePicture: require('../assets/profilePicture/userPicture2.jpg'),
            picture: require('../assets/photo/photo2.jpg'),
        },
        {
            idStory: 0,
            name: 'Groot',
            profilePicture: require('../assets/profilePicture/userPicture3.jpg'),
            picture: require('../assets/photo/photo3.jpg'),
        },
        {
            idStory: 0,
            name: 'Xii',
            profilePicture: require('../assets/profilePicture/userPicture4.jpg'),
            picture: require('../assets/photo/photo4.jpg'),
        },
        ,
        {
            idStory: 0,
            name: 'StarBucks',
            profilePicture: require('../assets/profilePicture/userPicture5.jpg'),
            picture: require('../assets/photo/photo5.jpg'),
        },
        ,
        {
            idStory: 0,
            name: 'PCF',
            profilePicture: require('../assets/profilePicture/userPicture6.jpg'),
            picture: require('../assets/photo/photo6.jpg'),
        },
    ];

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 5 }}>

            {storyInfo.map((data, index) => {
                // State qui gère l'affichage d'un coutour orange sur les stories
                const [watch, setWatch] = useState(data.isWatched);
                return (        
                    // Quand on press sur une story, on envoit le nom et la photo au StatusComponent
                    <TouchableOpacity
                        key={index}
                        onPress={() => {navigation.push('Status', { // les variables sont récupérables en params dans StatusComponent 
                            name: data.name,
                            profilePicture: data.profilePicture,
                            image: data.picture, // cette image devra être remplacée par une publication éphémère 
                        }); setWatch(!watch)}
                        }
                    >
                        <View style={{
                            flexDirection: 'column',
                            paddingHorizontal: 8,
                            position: 'relative',
                        }}>
                            {data.idStory == 1 ? ( // Si id == 1, alors c'est le compte de l'utilisateur, sinon ce sont les autres users de l'app 
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 17,
                                        right: 13,
                                        zIndex: 1,
                                    }}>
                                    <FontAwesomeIcon icon={faPlusCircle}
                                        style={{
                                            fontSize: 20,
                                            color: '#fff',
                                            borderRadius: 100,
                                        }} />
                                </View>
                            ) : null}
                            <View
                                style={{
                                    width: 68,
                                    height: 68,
                                    borderWidth: 1.8,
                                    borderRadius: 10,
                                    borderColor: watch ? "grey" : '#D66D67', // couleur du conteur des stories (orange = non vu, gris = vu)
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={data.profilePicture}
                                    style={{
                                        resizeMode: 'cover',
                                        width: '92%',
                                        height: '92%',
                                        borderRadius: 10,
                                        backgroundColor: 'orange', // couleur quand les images n'ont aps chargées
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 10,
                                    opacity: data.idStory == 0 ? 1 : 0.5,
                                    color: 'white',
                                }}>
                                {data.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            })}

        </ScrollView>
    )

}
export default Stories;