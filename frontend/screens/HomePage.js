import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faUser, faHashtag, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// fictionnal data for the Flatlist
// id sera l'id à pêcher en bdd (id utilisateur)
// title devra matcher avec le text issue de searchInput
// la flatlist doit être mise à jour au onChangeText pour être dynamique
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

  // State qui reçoit la valeur du search input
  const [search, setSearch] = useState(null);
  // State qui contient la balise FlatList
  const [searchClick, setSearchClick] = useState();

  // item fictifs pour la flatlist
  function oneItem({ item }) {

    var iconName;
    if (item.type == 'user') {
      iconName = faUser;
    } else if (item.type == 'tag'){
      iconName = faHashtag;
    } else {
      iconName = faLocationDot;
    }

    return (
      <View style={styles.item}>
        <FontAwesomeIcon style={styles.searchIcon} icon={iconName} size={24} color={'#7E7E7E'} />
        <Text style={styles.title} > : {item.title} </Text>
      </View>
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

  // flatlist qui apparaît quand on on fait une recherhe
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
          onChangeText={(value) => setSearch(value)}
          value={search}
          onFocus={() => { setSearchClick(OnSearchClick) }}
        >
        </TextInput>
      </View>

      {searchClick}

      <Button style={{ justifyContent: 'center' }}
        title="Home"
        onPress={() => {
          props.navigation.navigate("BottomNavigation", { screen: "Home" });
        }}
      >
      </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F97760',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#101010',
  },
  searchSection: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#505050',
    borderRadius: 10,
    height: 42,
    width: '60%',
    alignSelf: 'center'
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
  },
});

