import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

//desactiver les warning
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
// import { Ionicons } from '@expo/vector-icons';
//fontawesome
import { FontAwesomeIcon  } from '@fortawesome/react-native-fontawesome';
import {faComment, faMapLocationDot, faUser, faHouse, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

//screens
import profile from './screens/Profile';
import chat from './screens/ChatAccueil';
import PChoice from './screens/PubliChoiceScreen'
import publication from './screens/Insert';
import PParams from './screens/PubliParamsScreen';
import CameraScreen from './screens/CameraScreen';
import localisation from './screens/Map';
import Home from './screens/HomePage';
import Account from './screens/Account';
import SignUp from './screens/SignUp';



//création de la tab et stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
 
  return (
    <Tab.Navigator  
    screenOptions={( { route } ) => ({
      tabBarIcon: ( { color } ) => {
        let iconName;

        if(route.name === 'Home') {
          iconName = faHouse;
        } else if(route.name === 'localisation') {
          iconName = faMapLocationDot;
        } else if(route.name === 'publication') {
          iconName = faCirclePlus;
        }else if(route.name === 'chat') {
          iconName = faComment;
        }else if(route.name === 'profile') {
          iconName = faUser;
        }
        return <FontAwesomeIcon  icon={iconName} size={20} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor : '#94FFBD',
      inactiveTintColor: '#94FFBD',
      showLabel: false,
      style: {
        backgroundColor : '#151515'
      }
    }}
  >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='localisation' component={localisation} />
      <Tab.Screen name='publication' component={publication} />
      <Tab.Screen name='PChoice' component={PChoice} />
      <Tab.Screen name="chat" component={chat} />
      <Tab.Screen name="profile" component={profile} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown : false }} >
          <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
          <Stack.Screen exact name='Home' component={Home} />
          <Stack.Screen name='CameraScreen' component={CameraScreen} />
          <Stack.Screen name='PParams' component={PParams} />
          <Stack.Screen name='SignUp' component={SignUp} />
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
