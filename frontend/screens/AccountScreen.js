import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Publications from '../screenComponents/PublicationsAccount';
import LikeAccount from '../screenComponents/LikeAccount';


//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faShare, faLink, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function account() {
  
  const Tab = createMaterialTopTabNavigator();

    
  return (
    <View style={styles.container}>
      {/* bandeau */}
      <Text style={styles.echo} >Echo</Text>
      {/* entête */}
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/myeyeslamp.jpg')}
            style={styles.image}
        />
        <View>
          <Text style={styles.identifiant}>NicolasLagarge</Text>
          <Text style={styles.prenom}> Nicolas Lafarge</Text>
          <TouchableOpacity>
            <Text style={{ backgroundColor: "#8A2C27", color: "#7E7E7E", padding: 5, width: 120, marginTop: 28, borderRadius: 16, textAlign: 'center' }} >Follow</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FontAwesomeIcon  icon={faShare} size={40} color= "#7E7E7E" style={{marginTop: 25}} />  
          <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold'}}>
            <Text style={{ color: "#7E7E7E", padding: 5, borderRadius: 16 }}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold'}}>
            <Text style={{ color: "#7E7E7E", padding: 5, borderRadius: 16 }} >Block</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Following et followers */}
      <View style={{ flexDirection: 'row', paddingTop: 20}}>
        <Text style={styles.follow}><Text style={styles.bold}> 57</Text> Following</Text>
        <Text style={styles.follow}><Text style={styles.bold}>225 </Text>Followers</Text>
        <Text style={styles.follow}><Text style={styles.bold}>180 </Text>Likes</Text>
      </View>
      {/* site et instagram */}
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>
        <FontAwesomeIcon  icon={faLink} size={20} color= "#7E7E7E" style={{marginLeft: 20}} />
        <Text style={styles.web}>www.nicolaslafarge.com</Text>
        <FontAwesomeIcon  icon={faInstagram} size={20} color= "#7E7E7E" style={{marginLeft: 20}} />
        <Text style={styles.web}>nicolaslafarge</Text>
      </View>
      {/* publication et liked videos et photos */}
      <View style={{flex:1}}>
        <Tab.Navigator style={{marginTop: 20}}>
          <Tab.Screen name="Publications" component={Publications} />
          <Tab.Screen name="Likes" component={LikeAccount} />
        </Tab.Navigator>
      </View>
      {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 5 }}>
      {video}
    </View> */}
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
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
    marginRight: 22,
  },
  identifiant: {
    fontSize: 20,
    color: "#7E7E7E",
    fontWeight: 'bold',
    marginTop: 25,
    marginRight: 25,
  },
  prenom: {
    fontSize: 13,
    color: "#7E7E7E",
    fontWeight: 'bold',
  },
  follow: {
    fontSize: 15,
    color: "#7E7E7E",
    paddingLeft: 20,
  },
  web: {
    fontSize: 15,
    color: "#7E7E7E",
    marginLeft: 10,
  },
  publicationactive: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 10,
    backgroundColor: "#67D692",
    padding: 10,
  },
  publication: {
    fontSize: 15,
    color: "#FFFFFF",
    // backgroundColor: "#67D692",
    padding: 10,
  },
  following: {
    color: "red",
    flex: 1,
    flexDirection: "row",
  },
  bold: {
    color: "#94FFBD",
    fontWeight: 'bold'
  },
  lineStyle: {
    borderWidth: 1,
    width: "100%", 
    borderColor:'#7E7E7E',  
  },
  gallerytop: {
    marginTop: 10,
    justifyContent: 'center',
    width: 121,
    height: 116,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  gallery: {
    marginTop: 10,
    justifyContent: 'center',
    width: 121,
    height: 116,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  hashtag: {
    alignItems: 'center',
    fontSize: 15,
    color: "#FFFFFF",
    padding: 10,
  },
});


