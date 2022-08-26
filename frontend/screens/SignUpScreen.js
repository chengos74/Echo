import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

//fontawesome
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

//auth
import * as Facebook from 'expo-facebook';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();



export default function login(props) {

  //username et password
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isTokenValide, setIsTokenValide] = useState(false)

  //facebook useState
  // const [isLoggedin, setIsLoggedin] = useState(false);
  // const [userData, setUserData] = useState(null);
  // const [isImageLoading, setIsImageLoading] = useState(false);


  //facebook 
  // const facebookLogin = async () => {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: '1242896003145192',
  //     });
  //     const { type, token } =
  //       await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ['public_profile'],
  //       });
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);
  //       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //       setLo
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }

  // const logout = () => {
  //   setIsLoggedin(false);
  //   setUserData(null);
  //   setIsImageLoading(false);
  // }

  //google
  // const [request, response, googlePromptAsync] = Google.useAuthRequest({
  //   expoClientId: '683904437558-2ftt05jb1u2t2arm66k2ctdokk3mgo6t.apps.googleusercontent.com',
  // });

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { authentication } = response;
  //   }
  // }, [response]);

  //sauvegarde des données en json
  
  const ip = "192.168.43.223"
  const submitData = async () => {
    const donnee = await fetch('https://echoproject-api.herokuapp.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `nom=${nom}&prenom=${prenom}&email=${email}&username=${userName}&password=${password}`
    })
    
    const newDonnee = await donnee.json();
    console.log("donnée envoyé"+ JSON.stringify(newDonnee));
    if(newDonnee.token){
      props.navigation.navigate("BottomNavigation", { screen: "Home" })
    }
    // console.log("nouvel utilisateur " + JSON.stringify(newDonnee));
  }


  // const submitData = async () => {
  //   await fetch('http://192.168.43.223:3000/signup', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       nom: nom,
  //       prenom: prenom,
  //       email: email,
  //       username: userName,
  //       password: password
  //     })
  //   }).then(res => res.json())
  //     .then(data => {
  //       console.log("envoie from front" + data);
  //     }).catch(err => {
  //       console.log("error", err);
  //     })
  // }

  // const validate = (text) => {
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   console.log(text, reg.test(text));
  // };

  // var tokenOk = () => {
  //   setIsTokenValide(true)
  //   if (isTokenValide) {
  //     props.navigation.navigate('BottomNavigation', { screen: 'Home' })
  //   } else {
  //     <Text>Il y a eu un problème lors du signUp</Text>
  //   }
  //   setIsTokenValide(false)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Sign-Up</Text>
      <View style={styles.lineStyle} />
      <TextInput
        style={styles.nom}
        placeholder="Nom"
        placeholderTextColor={"#7E7E7E"}
        onChangeText={(value) => setNom(value)}
        value={nom} />
      <TextInput
        style={styles.prenom}
        placeholder="prenom"
        placeholderTextColor={"#7E7E7E"}
        onChangeText={(value) => setPrenom(value)}
        value={prenom} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#7E7E7E"}
        onChangeText={(value) => setEmail(value)}
        value={email} />
      <TextInput
        style={styles.prenom}
        placeholder="UserName"
        placeholderTextColor={"#7E7E7E"}
        onChangeText={(value) => setUserName(value)}
        value={userName} />
      <TextInput
        style={styles.password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={"#7E7E7E"}
        onChangeText={(value) => setPassword(value)}
        value={password} />

      <TouchableOpacity
        onPress={() => { submitData() }} 
        style={styles.valider}>
        <Text style={styles.searchInput}>Valider</Text>
      </TouchableOpacity>

      {/* <View style={styles.lineStyle} />


      <TouchableOpacity style={styles.searchSection} onPress={facebookLogin} >
        <Text style={styles.searchInput}>Facebook</Text>
        <FontAwesomeIcon style={styles.Icon} icon={faFacebook} size={24} color={'#7E7E7E'} />
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.searchSection} onPress={() => {
        googlePromptAsync({useProxy: true});
        }}>
        <Text style={styles.searchInput}>google</Text>
        <FontAwesomeIcon style={styles.Icon} icon={faGoogle} size={24} color={'#7E7E7E'} />
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.searchSection}>
        <Text style={styles.searchInput}>tiktok</Text>
        <FontAwesomeIcon style={styles.Icon} icon={faTiktok} size={24} color={'#7E7E7E'} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.searchSection}>
        <Text style={styles.searchInput}>instagram</Text>
        <FontAwesomeIcon style={styles.Icon} icon={faInstagram} size={24} color={'#7E7E7E'} />
        </TouchableOpacity> */}

      <View style={styles.lineStyle} />
      <TouchableOpacity onPress={() => {
          props.navigation.navigate("Login", { screen: "Login" });
      }}>
        <Text style={{fontSize:20, fontWeight:"bold", marginTop: 30, color:'#7E7E7E' }} >Already have an account - Login </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    color: '#7E7E7E',
    fontSize: 34,
    fontWeight: "bold",
  },
  nom: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#505050",
    borderRadius: 26,
    height: 46
  },
  prenom: {
    textAlign: 'center',
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#505050",
    borderRadius: 26,
    height: 46
  },
  input: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#505050",
    borderRadius: 26,
    height: 46
  },
  searchSection: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#505050',
    borderRadius: 26,
    height: 46
  },
  valider: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#505050',
    borderRadius: 26,
    height: 46,
    paddingRight: 40,
    paddingLeft: 30,
  },
  searchInput: {
    width: '45%',
    textAlign: 'center',
    marginLeft: 20,
    color: '#7E7E7E'
  },
  Icon: {
    marginRight: 20
  },

  password: {
    textAlign: 'center',
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#505050",
    borderRadius: 26,
    height: 46,
    marginTop: 30
  },

  appButtonText: {
    fontSize: 18,
    color: "#7E7E7E",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    textTransform: "uppercase",
    height: 46
  },

  lineStyle: {
    borderWidth: 2,
    width: "60%",
    borderColor: '#7E7E7E',
    marginTop: 30,
  }

});


