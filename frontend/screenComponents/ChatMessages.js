import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList } from 'react-native';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ChatAccueil({route, navigation}) {

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
        <View>
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
          <Text style={styles.prenom}>{message}</Text>
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
