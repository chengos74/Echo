// Import React & cie
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Switch } from "react-native";

import Slider from '@react-native-community/slider';


// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


// Fonction paramètres de la publication
export default function PubliParams(props) {


        // Pour l'input de la description
        const [text, onChangeText] = React.useState("Description");

        // Pour le switch
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);


        return (
                <ScrollView>

                        <View>


                                <Text>{"\n"}</Text>


                                <View>

                                        {/* Flèche back (gauche) */}
                                        <Text>
                                                <View style={{ alignItems: 'flex-end', marginLeft: 45, paddingBottom: 3, width: 30, height: 37, borderWidth: 2 }}>
                                                        <TouchableOpacity
                                                                // style={{ width: 40, height: 40, margin: 4, }}
                                                                title='Back'
                                                                onPress={() => { props.navigation.navigate("Publication", { screen: "PChoice" }); }}
                                                        // style={{marginLeft: 10}}
                                                        >
                                                                <FontAwesomeIcon icon={faCircleArrowLeft} size={35} color={'black'} />
                                                        </TouchableOpacity>
                                                </View>

                                                {/* "Fichier choisi" */}
                                                <View style={{ alignItems: 'center', marginLeft: 100, borderWidth: 2 }}>
                                                        <Text>
                                                                FICHIER CHOISI
                                                        </Text>
                                                </View>
                                        </Text>
                                </View>


                                {/* Aperçu du fichier choisi (depuis la pellicule ou la camera) */}
                                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', borderWidth: 2, width: 300, height: 210, borderRadius: 15 }}>
                                        </View>
                                </View>


                                <Text>{"\n"}</Text>

                                <Text>{"\n"}</Text>

                                {/* "Publier" + flèche retour vers home (droite) */}
                                <View style={{ alignItems: 'flex-end', marginRight: 40 }} >
                                        <Text>
                                                <View style={{ borderWidth: 2, height: 40, justifyContent: 'center' }}>
                                                        <Text>
                                                                PUBLIER
                                                        </Text>
                                                </View>

                                                <TouchableOpacity
                                                        style={{ borderWidth: 2, height: 40 }}
                                                        title='Publier'
                                                        onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
                                                >
                                                        <FontAwesomeIcon icon={faCircleArrowRight} size={35} color={'black'} />
                                                </TouchableOpacity>
                                        </Text>
                                </View>

                                <Text>{"\n"}</Text>

                                <Text>{"\n"}</Text>


                                {/* Slider */}
                                <View style={{ borderWidth: 2, borderRadius: 15, alignItems: 'center', marginLeft: 43, marginRight: 43 }}>
                                        <Text>
                                                <View style={{justifyContent:'center', paddingTop: 8}}>
                                                        <Slider
                                                                style={{ width: 200, height: 40}}
                                                                minimumValue={0}
                                                                maximumValue={1}
                                                                minimumTrackTintColor="#FFFFFF"
                                                                maximumTrackTintColor="#000000"
                                                        />
                                                </View>
                                                <View
                                                        style={{ justifyContent: 'center', paddingBottom:10, paddingLeft:10 }}
                                                >
                                                        <Text>
                                                                :   1 KM
                                                        </Text>
                                                </View>
                                        </Text>
                                </View>

                                <Text>{"\n"}</Text>

                                {/* Switch */}
                                <View style={{ alignItems: 'flex-end', marginRight: 40 }}>
                                        <Text>
                                                <View style={{ justifyContent: 'center', borderWidth: 2, height: 35 }}>
                                                        <Text>
                                                                EPHEMERE :
                                                        </Text>
                                                </View>
                                                <View style={{ borderWidth: 2 }}>
                                                        <Switch
                                                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                                                ios_backgroundColor="#3e3e3e"
                                                                onValueChange={toggleSwitch}
                                                                value={isEnabled}
                                                        />
                                                </View>
                                        </Text>
                                </View>


                                <Text>{"\n"}</Text>


                                {/* Input pour la description de la publication, dont hashtags */}

                                <TextInput
                                        multiline
                                        // numberOfLines={2}
                                        onChangeText={onChangeText}
                                        value={text}
                                        style={styles.input}
                                />

                        </View>
                </ScrollView >

        )
}

// Style cheets
const styles = StyleSheet.create({

        input: {
                borderWidth: 2,
                paddingBottom: '40%',
                padding: 3,
                marginLeft: '10%',
                marginRight: '10%',
                marginBottom: '63%',
                maxHeight: 200,
                height: 40,
        }

});