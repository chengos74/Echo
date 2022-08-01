import React, {useState, useEffect} from 'react';
import { StyleSheet, Button, View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import * as Facebook from 'expo-facebook';

export default function login() {

  //username et password
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //facebook useState
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);


  //facebook 
  facebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '1242896003145192',
      });
      const { type, token } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        setLo
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  logout = () => {
    setIsLoggedin(false);
    setUserData(null);
    setIsImageLoading(false);
  }

 

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="UserName"
        onChangeText={(value) => setUserName(value)}
       value={userName} />
        <TextInput
        style={styles.password}
        placeholder="Password"
        onChangeText={(value) => setPassword(value)}
     value={password} />

        <TouchableOpacity onPress={() => console.log("Username is :" + userName + " and password is :" +password)} style={styles.google}>
          <Text style={styles.appButtonText}>Valider</Text>
        </TouchableOpacity>

        <View style={styles.lineStyle} />

        <TouchableOpacity style={styles.facebook} onPress={facebookLogin}>
          <Text style={styles.appButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
          <Text style={styles.appButtonText}>google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tiktok}>
          <Text style={styles.appButtonText}>tiktok</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.instagram}>
          <Text style={styles.appButtonText}>instagram</Text>
        </TouchableOpacity>

        <View style={styles.lineStyle} />
        <Text style={{fontSize:20, fontWeight:"bold", marginTop: 30}}
        >Don't have an account - Sign-Up</Text>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#D01299',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    width: "60%",
    borderWidth: 1, 
    borderColor: "black"
  },
  password: {
    textAlign: 'center',
    width: "60%",
    borderWidth: 1, 
    borderColor: "black"
  },
  facebook: {
    elevation: 8,
    backgroundColor: "#3b5998",
    borderRadius: 10,
    marginTop: 30,
    width: "60%",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  google: {
    elevation: 8,
    backgroundColor: "#de5246",
    borderRadius: 10,
    marginTop: 30,
    width: "60%",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  tiktok: {
    elevation: 8,
    backgroundColor: "#010101",
    borderRadius: 10,
    marginTop: 30,
    width: "60%",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  instagram: {
    elevation: 8,
    backgroundColor: "#3f729b",
    borderRadius: 10,
    marginTop: 30,
    width: "60%",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  lineStyle: {
    borderWidth: 2,
    width: "60%", 
    borderColor:'black', 
    marginTop: 30, 
  }
    
});


