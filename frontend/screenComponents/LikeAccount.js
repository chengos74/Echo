import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faLock } from '@fortawesome/free-solid-svg-icons'

export default function LikeAccount() {
  return (
    <View style= {styles.container}>
      <FontAwesomeIcon  icon={faLock} size={160} color= "#7E7E7E"/>
          <Text style={styles.publication}>This user's liked videos are private Videos liked by nicolasLafarge are currently hidden</Text>
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
   publication: {
       fontSize: 15,
    color: "#7E7E7E",
  },

});