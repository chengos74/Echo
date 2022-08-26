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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment, faMapLocationDot, faUser, faHouse, faCirclePlus, faCircleUser, faUserGear } from '@fortawesome/free-solid-svg-icons'

//screens
import profile from './screens/ProfileScreen';
import chat from './screens/ChatScreen';
import PChoice from './screens/PubliChoiceScreen'
import PParams from './screens/PubliParamsScreen';
import CameraScreen from './screens/CameraScreen';
import localisation from './screens/MapScreen';
import Home from './screens/HomePageScreen';
import Account from './screens/AccountScreen';
import SignUp from './screens/SignUpScreen';
import Message from './screenComponents/ChatMessages'
import ImagePublication from './screenComponents/imagePublicationAccount';
import Status from './screenComponents/StatusComponent';
import ProfileSettings from './screens/ProfileSettingsScreen';
import Login from './screens/loginScreen';
import HomePage2 from './screens/HomeScreen2';

//-----REDUX STORE--------//
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import photoReducer from './reducers/camera.reducers';
import postReducer from './reducers/post.reducer';
import userData from './reducers/userDataReducer';
import { Provider } from 'react-redux';

const reducer = combineReducers({ photoReducer, postReducer, userData });
const store = configureStore({ reducer });

//création de la tab et stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = faHouse;
          } else if (route.name === 'localisation') {
            iconName = faMapLocationDot;
          } else if (route.name === 'PChoice') {
            iconName = faCirclePlus;
          } else if (route.name === 'chat') {
            iconName = faComment;
          } else if (route.name === 'profile') {
            iconName = faCircleUser;
          } else if (route.name === 'Account') {
            iconName = faUserGear;
          }
          return <FontAwesomeIcon icon={iconName} size={20} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#94FFBD',
        inactiveTintColor: '#94FFBD',
        showLabel: false,
        style: {
          backgroundColor: '#151515'
        }
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='localisation' component={localisation} />
      <Tab.Screen name='PChoice' component={PChoice} />
      <Tab.Screen name="chat" component={chat} />
      <Tab.Screen name="profile" component={profile} />
      <Tab.Screen name="Account" component={Account} />
      {/* <Tab.Screen name='HomePage2' component={HomePage2} /> */}
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
          <Stack.Screen name='Status' component={Status} />
          <Stack.Screen name='ProfileSettings' component={ProfileSettings} />
          <Stack.Screen name='CameraScreen' component={CameraScreen} />
          <Stack.Screen name='PParams' component={PParams} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Message' component={Message} />
          <Stack.Screen name='Image' component={ImagePublication} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
