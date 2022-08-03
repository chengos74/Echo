import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faShare, faLink, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function account() {

    
  return (
    <View style={styles.container}>
      {/* bandeau */}
      <Text style={styles.echo} >Echo</Text>
      {/* entête */}
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
          <Text style={{ color: "#7E7E7E", paddingRight: 30, paddingLeft: 30, padding: 5, borderRadius: 16 }}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ fontSize: 17, color: "#7E7E7E", fontWeight: 'bold', marginTop: 90, marginLeft: -100 }}>
          <Text style={{ color: "#7E7E7E", paddingRight: 30, paddingLeft: 30, padding: 5, borderRadius: 16 }} >Block</Text>
        </TouchableOpacity>
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
      {/* publication et liked */}
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>
        <Text style={styles.publicationactive}>Publication</Text>
        <FontAwesomeIcon  icon={faLock} size={20} color= "#7E7E7E" style={{marginLeft: 20, marginTop: 8}} />
        <Text style={styles.publication}>Liked</Text>
      </View>
      <View style={styles.lineStyle} />
      {/* videos et photos */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
          <Image
              source={require('../assets/nemo.jpg')}
              style={styles.gallerytop}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 5 }} />
        <Text style={{position: 'absolute', top: 102, left: 30, color: '#FFFFFF', fontSize: 12}}> 75</Text>
          <Image
              source={require('../assets/forest.jpg')}
              style={styles.gallerytop}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 135 }} />
        <Text style={{position: 'absolute', top: 102, left: 160, color: '#FFFFFF', fontSize: 12}}> 105</Text>
          <Image
              source={require('../assets/tournesol.jpg')}
              style={styles.gallerytop}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 265 }} />
        <Text style={{position: 'absolute', top: 102, left: 290, color: '#FFFFFF', fontSize: 12}}> 150</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
          <Image
              source={require('../assets/hossein.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 5 }} />
        <Text style={{position: 'absolute', top: 102, left: 30, color: '#FFFFFF', fontSize: 12}}> 50</Text>
          <Image
              source={require('../assets/darkroomlabs-F8c1zwtNzYs-unsplash.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 135 }} />
        <Text style={{position: 'absolute', top: 102, left: 160, color: '#FFFFFF', fontSize: 12}}> 205</Text>
          <Image
              source={require('../assets/masha-raymers.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 265 }} />
        <Text style={{position: 'absolute', top: 102, left: 290, color: '#FFFFFF', fontSize: 12}}> 345</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
          <Image
              source={require('../assets/mario-la-pergola.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 5 }} />
        <Text style={{position: 'absolute', top: 102, left: 30, color: '#FFFFFF', fontSize: 12}}> 784</Text>
          <Image
              source={require('../assets/stephen-leonardi-C4.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 135 }} />
        <Text style={{position: 'absolute', top: 102, left: 160, color: '#FFFFFF', fontSize: 12}}> 587</Text>
          <Image
              source={require('../assets/stephen-leonardi-dm.jpg')}
              style={styles.gallery}
          />
        <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 265 }} />
        <Text style={{position: 'absolute', top: 102, left: 290, color: '#FFFFFF', fontSize: 12}}> 250</Text>
      </View>
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
    marginLeft: -140,
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


