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
import publiChoice from './screens/PubliChoice';
import publication from './screens/Insert';
import CameraScreen from './screens/CameraScreen';
import localisation from './screens/Map';
import Home from './screens/HomePage';
import Login from './screens/loginScreen';



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
      activeTintColor : '#FF0000',
      inactiveTintColor : '#dfe6e9',
      style: {
        backgroundColor : '#11640F'
      }
    }}
  >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='localisation' component={localisation} />
      <Tab.Screen name='publication' component={publication} />
      <Tab.Screen name="chat" component={chat} />
      <Tab.Screen name="profile" component={profile} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown : false }} >
          <Stack.Screen exact name='Home' component={Home} />
          <Stack.Screen name='CameraScreen' component={CameraScreen} />
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
