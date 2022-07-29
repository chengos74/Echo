import React from 'react'

//desactiver les warning
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
// import { Ionicons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//screens
import profile from './screens/Profile';
import chat from './screens/ChatAccueil';
import publication from './screens/Insert';
import localisation from './screens/Map'
import Home from './screens/HomePage'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//création de la tab et stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
 
  return (
    <Tab.Navigator  
      screenOptions={( { route } ) => ({
        tabBarIcon: ( { color } ) => {
          let iconName;

          if(route.name === 'home') {
            iconName = 'fa-solid fa-house'
          } else if(route.name === 'publication') {
            iconName = 'ios-chatbubbles';
          } else if(route.name === 'chat') {
            iconName = 'fa-solid fa-comment';
          } else if(route.name === 'localisation') {
            iconName = 'fa-solid fa-location-dot';
          } else if(route.name === 'profile') {
            iconName = 'fa-solid fa-user';
          }
          return <FontAwesomeIcon name={iconName} size={24} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor : '#0984e3',
        inactiveTintColor : '#dfe6e9',
        style: {
          backgroundColor : '#130f40'
        }
      }}
    >
      <Tab.Screen name='localisation' component={localisation} />
      <Tab.Screen name='publication' component={publication} />
      <Tab.Screen name="chat" component={chat} />
      <Tab.Screen name="profile" component={profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown : false }} >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
