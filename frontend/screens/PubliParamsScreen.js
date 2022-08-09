// Import React & cie
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Switch, KeyboardAvoidingView } from "react-native";
import { Slider } from '@rneui/themed';

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
// Fonction paramètres de la publication
export default function PubliParams(props) {

    // Pour l'input de la description
    const [text, onChangeText] = React.useState(null);
    // State pour la valeur du slider
    const [range, setRange] = useState(0);
    // Pour le switch
    const [isEnabled, setIsEnabled] = useState(false);
    // toggle switch ephemere
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 320, height: 240, borderRadius: 10, backgroundColor: '#fff' }}>
                            <Text>Preview image or video</Text>
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
                            onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
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
                                    minimumValue={0}
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
                            style={{ color: '#fff', marginLeft: 10, width: '90%', alignSelf: 'center',  height: 100 }}
                        />
                    </View>
                </ScrollView>
            </View >
        </KeyboardAvoidingView>
    )
};