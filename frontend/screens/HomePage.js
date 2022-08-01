import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomePage(props) {
  return (
    <View  style={styles.container}>
      <Button
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
});

