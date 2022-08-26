// Import React & cie
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Switch, KeyboardAvoidingView, Image } from "react-native";
import { Slider, useTheme } from '@rneui/themed';
import { connect } from 'react-redux';
// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

// Fonction paramètres de la publication
function PubliParams(props) {
    // console.log("photo taken: " + JSON.stringify(props.newPhoto[0].uri));
    console.log("selected image: " + JSON.stringify(props.newPhoto[0].uri))
    // Pour l'input de la description
    const [text, onChangeText] = useState(null);
    // State pour la valeur du slider
    const [range, setRange] = useState(0);
    // Pour le switch
    const [isEnabled, setIsEnabled] = useState(false);
    // toggle switch ephemere
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // State fictives pour post
    const [pseudo, setPseudo] = useState(props.userData.username);
    const [avatar, setAvatar] = useState(require('../assets/photo/photo7.jpg'));
    const [location, setLocation] = useState('Bordeaux');
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(null)
    const [time, setTime] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [latitude, setLatitude] = useState(44.83667581936292);
    const [longitude, setLongitude] = useState(-0.575641307603843);

    // State qui reçoit l'uri de la photo qui vient d'être priseé
    const [uriPhoto, setUriPhoto] = useState(props.newPhoto[0].uri);

    // console.log(uriPhoto);
    // var postImage

    // useEffect(() => {
    //     postImage = `../../backend/tmp/${props.newPhoto[0].uri}`
    //     // console.log(postImage);
    // },[props.newPhoto[0].uri])

    const ip = '192.168.43.223'
    function handlePost(
        postImage,
        postPseudo,
        range,
        desc,
        postProfilePicture,
        city,
        likes,
        comments,
        time,
        isLiked,
        isComment,
        latitude,
        longitude){
        fetch('https://echoproject-api.herokuapp.com/create', {
        // fetch('http://' + ip + ':3000/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                postImage: postImage,
                postPseudo: props.userData.username,
                range: range,
                desc: desc,
                postProfilePicture: postProfilePicture,
                city: city,
                likes: likes,
                comments: comments,
                time: time,
                isLiked: isLiked,
                isComment: isComment,
                latitude: latitude,
                longitude: longitude
            })
        })
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <View style={{ flex: 1, backgroundColor: '#101010' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, justifyContent: 'space-between', marginLeft: 12, marginRight: 12 }}>
                    <View>
                        <TouchableOpacity
                            title='Back'
                            onPress={() => { props.navigation.navigate("PChoice", { screen: "PChoice" }); }}
                        >
                            <FontAwesomeIcon icon={faCircleArrowLeft} size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignContent: 'center', }}>
                        <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#fff', fontSize: 20 }}>
                            New publication
                        </Text>
                    </View>
                    <FontAwesomeIcon icon={faCircleArrowLeft} size={30} color={'transparent'} style={{}} />
                </View>

                <ScrollView>
                    {/* Aperçu du fichier choisi (depuis la pellicule ou la camera) */}
                    <View style={{ alignItems: 'center', paddingTop: 30 }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 320,
                            height: 240,
                            borderRadius: 20,
                            backgroundColor: 'white'
                        }}
                        >
                            <Image source={{ uri: uriPhoto }} style={{ width: 320, height: 240, borderRadius: 20 }} />
                        </View>
                    </View>
                    {/* "Publier" + flèche retour vers home (droite) */}
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 30 }} >
                        <View style={{ height: 40, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#fff', marginRight: 10 }}>
                                POST
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{ height: 40 }}
                            title='Post'
                            onPress={() => {
                                props.navigation.navigate("BottomNavigation", { screen: "Home" });
                                props.onPost(
                                    uriPhoto,
                                    props.userData.username,
                                    range,
                                    text,
                                    avatar,
                                    location,
                                );
                                handlePost(
                                    uriPhoto,
                                    props.userData.username,
                                    range,
                                    text,
                                    avatar,
                                    location,
                                    likes,
                                    comments,
                                    time,
                                    isLiked,
                                    isComment,
                                    latitude,
                                    longitude)
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleArrowRight} size={35} color={'#67D692'} />
                        </TouchableOpacity>
                    </View>
                    {/* Slider */}
                    <View style={{ borderWidth: 2, borderRadius: 15, alignItems: 'center', marginLeft: 30, marginRight: 30, borderColor: '#242424', marginTop: 20 }}>
                        <Text>
                            <View style={{ justifyContent: 'center', paddingTop: 8 }}>
                                <Slider
                                    value={range}
                                    onValueChange={setRange}
                                    style={{ width: 200, height: 40, }}
                                    trackStyle={{ color: '#242424' }}
                                    minimumValue={0.010}
                                    maximumValue={1}
                                    step={0.01}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#000000"
                                    thumbTintColor='#D66D67'
                                    thumbStyle={{ width: 25, height: 25 }}
                                />
                            </View>
                            <View
                                style={{ justifyContent: 'center', paddingBottom: 10, paddingLeft: 10 }}
                            >
                                <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#fff' }}>
                                    :   {range.toFixed(2)} KM
                                </Text>
                            </View>
                        </Text>
                    </View>
                    {/* Switch */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'flex-end', marginRight: 30 }}>

                        <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#fff', }}>
                            TEMPORARY :
                        </Text>

                        <View style={{ marginLeft: 10 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#67D692" }}
                                thumbColor={isEnabled ? "#D66D67" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    {/* Input pour la description de la publication, dont hashtags */}
                    <Text style={{ color: 'white', marginLeft: 30, marginTop: 10 }}>Add description</Text>
                    <View style={{ width: '85%', backgroundColor: '#242424', borderRadius: 10, height: 100, marginBottom: 20, alignSelf: 'center', marginTop: 5 }}>

                        <TextInput
                            placeholder='Description'
                            placeholderTextColor={'#7E7E7E'}
                            multiline
                            maxLength={300}
                            numberOfLines={4}
                            onChangeText={onChangeText}
                            value={text}
                            style={{ color: '#fff', marginLeft: 10, width: '90%', alignSelf: 'center', height: 100 }}
                        />
                    </View>
                </ScrollView>
            </View >
        </KeyboardAvoidingView>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        onPost: function (uriFromImage, pseudo, range, desc, avatar, location) {
            dispatch({
                type: 'post',
                postImage: uriFromImage,
                postPseudo: pseudo,
                range: range,
                desc: desc,
                postProfilePicture: avatar,
                city: location,
                likes: null,
                comments: null,
                time: 'now',
                isLiked: false,
                isComment: false,
                latitude: 44.83667581936292,
                longitude: -0.575641307603843,
            });
        }
    }
}

function mapStateToProps(state) {
    return ({ newPhoto: state.photoReducer, userData: state.userData });
}

export default connect(mapStateToProps, mapDispatchToProps)(PubliParams);
