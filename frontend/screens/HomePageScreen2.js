import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Post from '../screenComponents/PostComponent';
import PostComponent2 from '../screenComponents/PostComponent2';
import Stories from '../screenComponents/StoryComponent';
//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUser, faHashtag, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// fictionnal data for the Flatlist
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    type: 'user',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    type: 'user',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    type: 'tag',
  },
  {
    id: '5zré"ré"ér',
    title: 'Fourth Item',
    type: 'city',
  },
];

export default function HomePage(props) {
  // State pour renvoyer à la pga login si non connecté
  const [isLogin, setIsLogin] = useState(true);
  // State qui reçoit la valeur du search input
  const [search, setSearch] = useState(null);
  // State qui contient la balise FlatList
  const [searchClick, setSearchClick] = useState(null);

  // fonction que détecte le click sur un item de la flatlist
  async function handlesubmit(textFromInput) {
    // IP adress partage de connexion
    const ip = "192.168.43.223";

    let userResearch = textFromInput;

    // réponse du backend
    let rawReponse = await fetch("http://" + ip + ":3000/search", {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `userResearch=${userResearch}`
    });
    let response = await rawReponse.json()
    console.log("reponse" + JSON.stringify(response));
  }

  // item pour la flatlist
  function oneItem({ item }) {

    var iconName;
    if (item.type == 'user') {
      iconName = faUser;
    } else if (item.type == 'tag') {
      iconName = faHashtag;
    } else {
      iconName = faLocationDot;
    }

    return (
      <TouchableOpacity style={styles.item}
        onPress={{}}
      >
        <FontAwesomeIcon style={styles.searchIcon} icon={iconName} size={24} color={'#7E7E7E'} />
        <Text style={styles.title} > : {item.title} </Text>
      </TouchableOpacity>
    )
  };

  // separateur d'item de la liste
  const listSeparator = () => {
    return <View style={styles.separator} />
  };

  // bouton pour fermer la liste de la barre de recherche
  const listFooter = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSearchClick(null);
        }}>
        <FontAwesomeIcon icon={faCircleXmark} size={28} color={'#fff'} />
      </TouchableOpacity>)
  };

  // flatlist qui fati apparaître le flatlist quand on on fait une recherhe
  var OnSearchClick = () => {
    return (
      <FlatList
        data={DATA}
        renderItem={oneItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={listSeparator}
        ListFooterComponentStyle={styles.closeIcon}
        ListFooterComponent={listFooter}
      />
    )
  };

    return (
      <View style={styles.container}>
        
        <View style={styles.searchSection}>
          <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} size={24} color={'#7E7E7E'} />
           <TextInput
            style={styles.searchInput}
            placeholder='Search'
            placeholderTextColor="#7E7E7E"
            color='white'
            onChangeText={(value) => { setSearch(value), handlesubmit(value) }}
            value={search}
            onFocus={() => { setSearchClick(OnSearchClick) }}
          >
          </TextInput>
        </View>
        {searchClick}
        <View>
          <Stories />
        </View>
        <ScrollView>
          <PostComponent2 />
        </ScrollView>

      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  searchSection: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#505050',
    borderRadius: 10,
    height: 42,
    width: '50%',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  searchInput: {
    backgroundColor: '#505050',
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
  searchIcon: {
    marginLeft: 10,
    padding: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 13,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  closeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});
