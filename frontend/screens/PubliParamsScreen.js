// Import React & cie
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Switch } from "react-native";
import { Slider } from '@rneui/themed';


// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


// Fonction paramètres de la publication
export default function PubliParams(props) {


    // Pour l'input de la description
    const [text, onChangeText] = React.useState("Description");
    // State pour la valeur du slider
    const [range, setRange] = useState(0);
    // Pour le switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <ScrollView>
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

                {/* Aperçu du fichier choisi (depuis la pellicule ou la camera) */}
                <View style={{ alignItems: 'center', paddingTop: 30 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: 320, height: 240, borderRadius: 10, backgroundColor: '#fff' }}>
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
                <View style={{ borderWidth: 2, borderRadius: 15, alignItems: 'center', marginLeft: 43, marginRight: 43, borderColor: '#242424', marginTop: 20 }}>
                    <Text>
                        <View style={{ justifyContent: 'center', paddingTop: 8 }}>
                            <Slider
                                value={range}
                                onValueChange={setRange}
                                style={{ width: 200, height: 40, }}
                                trackStyle={{ color: '#242424' }}
                                minimumValue={0}
                                maximumValue={1}
                                step={0.1}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                            />
                        </View>
                        <View
                            style={{ justifyContent: 'center', paddingBottom: 10, paddingLeft: 10 }}
                        >
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#fff' }}>
                                :   {range} KM
                            </Text>
                        </View>
                    </Text>
                </View>

                <Text>{"\n"}</Text>

                {/* Switch */}
                <View style={{ alignItems: 'flex-end', marginRight: 40 }}>
                    <Text>
                        <View style={{ justifyContent: 'center', borderWidth: 2, height: 35 }}>
                            <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
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
