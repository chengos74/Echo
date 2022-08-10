import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, Button, FlatList } from 'react-native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function ChatAccueil({route, navigation: { goBack } }) {

  const { avatar } = route.params;
  const { name } = route.params;
  const { message } = route.params;

  // console.log("route"+ JSON.stringify(route));
  // console.log("route params" + JSON.stringify(route.params));
    
    // separateur d'item de la liste
  const listSeparator = () => {
    return <View style={styles.separator} />
  };

  return (
     <View style={styles.container}>
      {/* bandeau */}
      <View style={styles.echo}>
        <View style={{position: 'absolute', left: 25}}>
          <TouchableOpacity onPress={() => goBack()} >
        <FontAwesomeIcon icon={faCircleArrowLeft} size={30} color= "#67D692"/>
          </TouchableOpacity>
        </View>
          <View >
              <Image
                source={avatar}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.prenom}>{name}</Text>
            </View>
        {/* <Text style={styles.prenom} >{message}</Text> */}
      </View>
      {/* vue message */}
      <View>
          <Text style={styles.text}>{message}</Text>
          {/* <FlatList
            style={{backgroundColor: "purple", width: "100%"}}
            data={route}
            renderItem={({ item }) => (
                <View style={{ flex: 1, backgroundColor: "green"}}>
                    <View>
                      <Text style={styles.prenom}> {item.params.message}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.date}>{item.params.date}</Text>
                        <FontAwesomeIcon  icon={faCheck} size={20} color= "#67D692" style={{marginTop: 5}} />  
                    </View>
                </View>
              )}
            keyExtractor={(item => route.key)}
              ItemSeparatorComponent={listSeparator}
          /> */}
      </View>
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#101010',
    alignItems: 'center'
  },
  echo: {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 22,
    color: "#7E7E7E",
    backgroundColor: "#DBDBDB",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
  },
identifiant: {
    fontSize: 17,
    color: "#8A2C27",
    fontWeight: 'bold',
  },
  prenom: {
    fontSize: 20,
    color: "red",
    fontWeight: 'bold',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: "red",
    fontWeight: 'bold',
  },

});
