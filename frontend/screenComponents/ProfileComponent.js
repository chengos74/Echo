import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import PublicationsAccount from './PublicationsAccount';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faLink } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function ProfileComponent(props) {
    // gère la navigation vers Profile-Settings
    const navigation = useNavigation();
    // Données fictives 
    const data = [
        {
            id: 0,
            userPseudo: 'mr Bean',
            profilePicture: require('../assets/profilePicture/userPicture1.jpg'),
            like: 75,
            desc: `My name is ${props.userData.username} and i'd like to know how to center a div pls`,
            following: 255,
            followers: 321,
            likes: 1907,
        },
    ]
    const profile = data.map((data, index) => {
        return (
            <View key={index}>
                <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22, }}>{props.userData.username}</Text>
                    </View>
                    <TouchableOpacity style={{ left: 130 }}>
                        <FontAwesomeIcon icon={faGear} size={20} color='#fff' />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar
                        rounded
                        source={data.profilePicture} // photo de profil de l'utilisateur
                        size={94}
                    />
                    <View style={{ width: '70%', marginLeft: 20 }}>
                        <Text style={{ color: '#fff' }}>{data.desc}</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10, }}>
                            <FontAwesomeIcon icon={faLink} color='white' style={{ marginRight: 5 }} />
                            <Text style={{ color: '#fff' }}>{props.userData.username}.fr</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{
                            width: '50%',
                            alignItems: 'center',
                            backgroundColor: '#505050',
                            height: 32,
                            borderRadius: 10,
                        }}
                        // ouvrir le screen profile settings et lui push les data ci-dessous
                        onPress={() => {
                            navigation.push('ProfileSettings', {
                                pseudo: data.userPseudo,
                                desc: data.desc,
                                profilePicture: data.profilePicture,
                            })
                        }}
                    >

                        <Text style={{ color: '#fff', marginTop: 6 }}>Modify my profil</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: 20,
                        marginBottom: 15,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#94FFBD', marginRight: 5, fontWeight: 'bold' }}>{data.following}</Text>
                        <Text style={{ color: 'white' }}>Following</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#94FFBD', marginRight: 5, fontWeight: 'bold' }}>{data.followers}</Text>
                        <Text style={{ color: 'white' }}>Followers</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#94FFBD', marginRight: 5, fontWeight: 'bold' }}>{data.likes}</Text>
                        <Text style={{ color: 'white' }}>Likes</Text>
                    </View>
                </View>

            </View>
        )
    });

    return (
        <View style={{ flex: 1 }}>
            {profile}
                    <PublicationsAccount/>
        </View>
    );
};

function mapStateToProps(state){
    return ({ userData: state.userData });
}

export default connect(mapStateToProps, null)(ProfileComponent);

