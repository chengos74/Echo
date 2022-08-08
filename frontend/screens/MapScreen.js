import React, { useEffect, useState, Components } from "react";
import { View } from "react-native";

// ATTENTION : BALISES BUTTON, OVERLAY ET INPUT --> UTILISER LA DOC RNEUI 4.0.0.RC6 

// NE PAS IMPORTER DES ÉLÉMENTS DEPUIS REACT NATIVE ELEMENTS --> CONFLIT 

// IMPORTER UNIQUEMENT DES ÉLÉMENTS DEPUIS @RNEUI/THEMED OU @RNEUI/BASE
import { Button, Overlay, Input } from "@rneui/themed";

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


export const getCurrentLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
	});
};


export default function MapScreen(props) {

	//// Mise en place de la géolocalisation
	const [currentLatitude, setCurrentLatitude] = useState(0);
	const [currentLongitude, setCurrentLongitude] = useState(0);


	//// Mise en place de la géolocalisation
	useEffect(() => {
		async function askPermissions() {
			// let { status } = await Permissions.askAsync(Permissions.LOCATION);
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status === 'granted') {
				Location.watchPositionAsync({ distanceInterval: 2 },
					(location) => {
						setCurrentLatitude(location.coords.latitude);
						setCurrentLongitude(location.coords.longitude);
					});
			}
		}

		askPermissions()

	}, [])


	return (

		<View style={{ flex: 1 }}>

			{/* La Map principale */}
			<MapView
				onPress={(e) => { selectPOI(e) }}
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 44.836151,
					longitude: -0.580816,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>

				{/* Notre position perso */}
				<Marker key={'currentPos'}
					pinColor='green'
					title='Hello'
					description="I'm here"
					coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
					image={require('../assets/green-circle.png')}
				/>

			</MapView>

		</View >
	)
}


