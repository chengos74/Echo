import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ChatAccueil(props) {

  const list = [
    {
      id: '1',
      name: "Nicolas Lafarge",
      message: "tu fais quoi demain ?",
      avatar: require('../assets/myeyeslamp.jpg'),
      date: "11/07/2022",
    },
    {
      id: '2',
      name: "Sebastien Grosjean",
      message: "j'adore tes photos",
      avatar: require('../assets/avatar_2.jpg'),
      date: "07/07/2022",
    },
    {
      id: '3',
      name: "Johanne Esbourg",
      message: "J'ai faim",
      avatar: require('../assets/indian.jpg'),
      date: "05/07/2022",
    },
    {
      id: '4',
      name: "Cam Lot",
      message: "Un foot demain",
      avatar: require('../assets/avatar_3.jpg'),
      date: "02/07/2022",
    },
    {
      id: '5',
      name: "Bastien Cochonou",
      message: "barbecue demain soir",
      avatar: require('../assets/avatar_4.jpg'),
      date: "01/07/2022",
    },
  
  ]

  //pour envoyer les information à une autre page
  const navigation = useNavigation();
  
    // separateur d'item de la liste
  const listSeparator = () => {
    return <View style={styles.separator} />
  };

  return (
     <View style={styles.container}>
      {/* bandeau */}
      <Text style={styles.echo} >Discussion</Text>
      {/* vue message */}
       <FlatList
        data={list}
          renderItem={({ item }) => (
          <ScrollView>
              <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', marginTop: 15, padding: 10 }}
              onPress={() =>{navigation.push("Message", {avatar: item.avatar, name: item.name, message: item.message})} }>
              <Image
                    source={item.avatar}
                    style={styles.image}
                />
                <View style={{width: '60%', justifyContent: 'center'}}>
                  <Text style={styles.identifiant}>{item.name}</Text>
                  <Text style={styles.prenom}> {item.message}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.date}>{item.date}</Text>
                    <FontAwesomeIcon  icon={faCheck} size={20} color= "#67D692" style={{marginTop: 5}} />  

                </View>
            </TouchableOpacity>
            {/* <View style={styles.lineStyle} />  */}
            </ScrollView>
        )}
        keyExtractor={(item => item.id)}
        ItemSeparatorComponent={listSeparator}
      />
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
    textAlign: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
identifiant: {
    fontSize: 17,
    color: "#8A2C27",
    fontWeight: 'bold',
  },
  prenom: {
    fontSize: 13,
    color: "#348A55",
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: "#7E7E7E",
    marginTop: 15
  },
  separator: {
    alignItems: 'center',
    borderWidth: 0.5,
    width: "100%", 
    borderColor:'#67D692', 
    marginTop: 15,  
  },

});
