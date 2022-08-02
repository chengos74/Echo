import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//-----IMPORT ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function HomePage(props) {
  return (
    <View style={styles.container}>

      <View style={styles.searchSection}>
        
        <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} size={24} color={'grey'} />

        <TextInput
          style={styles.searchInput}
          placeholder='Search'
        >
        </TextInput>
      </View>


      <Button style={{justifyContent: 'center'}}
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
  }, 
  searchSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 42
  },
  searchInput: {
    alignContent: 'flex-start',
    marginTop: 20, 
    width: '50%',
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginBottom: 10
  },
  searchIcon: {
    marginLeft: 10,
    padding: 10,
  },
});

