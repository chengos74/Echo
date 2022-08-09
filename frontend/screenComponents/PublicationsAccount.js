import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function PublicationsAccount(props) {

const navigation = useNavigation();
    //donnees fictives
  const data = [
    {
      id: 0,
      image: require('../assets/nemo.jpg'),
      like: 75,
    },
    {
      id: 1,
      image: require('../assets/forest.jpg'),
      like: 105,
    },
    {
      id: 2,
      image: require('../assets/tournesol.jpg'),
      like: 150,
    },
    {
      id: 3,
      image: require('../assets/hossein.jpg'),
      like: 50,
    },
    {
      id: 4,
      image: require('../assets/darkroomlabs.jpg'),
      like: 205,
    },
    {
      id: 5,
      image: require('../assets/masha-raymers.jpg'),
      like: 345,
    },
    {
      id: 6,
      image: require('../assets/mario-la-pergola.jpg'),
      like: 784,
    },
    {
      id: 7,
      image: require('../assets/stephen-leonardi-C4.jpg'),
      like: 784,
    },
    {
      id: 8,
      image: require('../assets/stephen-leonardi-dm.jpg'),
      like: 250,
    },
    {
      id: 9,
      image: require('../assets/darkroomlabs.jpg'),
      like: 458,
    },
    {
      id: 10,
      image: require('../assets/anthony-da-cruz.jpg'),
      like: 780,
    },
    {
      id: 11,
      image: require('../assets/alec-krumh.jpg'),
      like: 850,
    },
    {
      id: 12,
      image: require('../assets/sergey-pesterev.jpg'),
      like: 325,
    },
    {
      id: 13,
      image: require('../assets/mathias-reding.jpg'),
      like: 112,
    },
    {
      id: 14,
      image: require('../assets/lucia-garo.jpg'),
      like: 112,
    },
    {
      id: 15,
      image: require('../assets/cookie.jpg'),
      like: 148,
    },
    {
      id: 16,
      image: require('../assets/muffins.jpg'),
      like: 168,
    },
    {
      id: 17,
      image: require('../assets/fruits.jpg'),
      like: 668,
    },
  ]

  const photos = data.map((e, i) => {
    return (
      <View key={i}>
        <TouchableOpacity onPress={() =>{navigation.push("Image", {image: e.image, like: e.like})} }>
          <Image
            source={e.image}
            style={styles.gallerytop}
          />
          <FontAwesomeIcon icon={faEye} size={18} color="#FFFFFF" style={{ marginLeft: 5, justifyContent: 'flex-end', position: 'absolute', top: 100, left: 5 }} />
          <Text style={{ position: 'absolute', top: 102, left: 30, color: '#FFFFFF', fontSize: 12 }}> {e.like}</Text>
        </TouchableOpacity>
      </View>
    )
  })


  return (
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        {photos}
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
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

});
