import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faShare } from '@fortawesome/free-solid-svg-icons'

export default function account() {

    
  return (
    <View style={styles.container}>
      <Text style={styles.echo} >Echo</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/myeyeslamp-2Qwp7CgdWcg-unsplash.jpg')}
            style={styles.image}
        />
          <Text style={styles.identifiant}>NicolasLagarge</Text>
        <Text style={styles.prenom}> Nicolas Lafarge</Text>
        <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold', marginTop: 100, marginLeft: -100 }}>
          <Text style={{ backgroundColor: "#8A2C27", color: "#7E7E7E", paddingRight: 30, paddingLeft: 30, padding: 5, borderRadius: 16 }} >Follow</Text>
        </TouchableOpacity>
        <FontAwesomeIcon  icon={faShare} size={40} color= "#7E7E7E" style={{marginTop: 30, marginLeft: 80}} />  
        <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold', marginTop: 70, marginLeft: -70 }}>
          <Text style={{ color: "#7E7E7E", paddingRight: 30, paddingLeft: 30, padding: 5, borderRadius: 16 }} >Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold', marginTop: 90, marginLeft: -100 }}>
          <Text style={{ color: "#7E7E7E", paddingRight: 30, paddingLeft: 30, padding: 5, borderRadius: 16 }} >Block</Text>
        </TouchableOpacity>
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  echo: {
    marginTop: 10,
    padding: 20,
    fontSize: 22,
    color: "#7E7E7E",
    backgroundColor: "#DBDBDB",
    width: 380,
    alignItems: "center",
  },
  image: {
    marginTop: 30,
    marginLeft: 20,
    width: 100,
    height: 100,
  },
  identifiant: {
    fontSize: 20,
    color: "#7E7E7E",
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20
  },
  prenom: {
    fontSize: 13,
    color: "#7E7E7E",
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: -140
  },
});


