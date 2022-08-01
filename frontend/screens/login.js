import React, {useState} from 'react';
import { StyleSheet, Button, View, TextInput} from 'react-native';

export default function login() {

  //username et password
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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

        <Button title="valider" onPress={() => console.log("Username is :" + userName + " and password is :" +password)} />
        <Button title="Facebook" color="#3b5998" style={{}} />
        <Button title="Google" color='#de5246' />
        <Button title="Tiktok" color='#010101' />
        <Button title="Instagram" color='#3f729b' />
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
    marginBottom: 30,
    textAlign: 'center',
    width: "60%",
    borderWidth: 1, 
    borderColor: "black"
  },
    
});
