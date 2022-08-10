import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// ATTENTION : BALISES BUTTON, OVERLAY ET INPUT --> UTILISER LA DOC RNEUI 4.0.0.RC6 

// NE PAS IMPORTER DES ÉLÉMENTS DEPUIS REACT NATIVE ELEMENTS --> CONFLIT 

// IMPORTER UNIQUEMENT DES ÉLÉMENTS DEPUIS @RNEUI/THEMED OU @RNEUI/BASE
import { Overlay } from "@rneui/themed";

import { Marker } from 'react-native-maps';

import MapView from "react-native-map-clustering";

import * as Location from 'expo-location';



//// Mise en place position

export const getCurrentLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
	});
};


export default function MapScreen() {

	//// Mise en place géolocalisation

	const [currentLatitude, setCurrentLatitude] = useState(0);
	const [currentLongitude, setCurrentLongitude] = useState(0);

	useEffect(() => {
		const currentLocation = {
			latitude: currentLatitude,
			longitude: currentLongitude,
			latitudeDelta: 0.05,
			longitudeDelta: 0.05,
		};
		async function askPermissions() {
			// let { status } = await Permissions.askAsync(Permissions.LOCATION);
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status === "granted") {
				Location.watchPositionAsync({ distanceInterval: 2 }, (location) => {
					setCurrentLatitude(location.coords.latitude);
					setCurrentLongitude(location.coords.longitude);
				});
			}
		}
		askPermissions();
		if (currentLocation != 0) {
			const yourLocation = () => {
				mapRef.current.animateToRegion(currentLocation, 3 * 1000);
			};
			yourLocation();
		}
	}, [currentLatitude, currentLongitude, mapRef]);


	useEffect(() => {
		const currentLocation = {
			latitude: currentLatitude,
			longitude: currentLongitude,
			latitudeDelta: 0.05,
			longitudeDelta: 0.05,
		};

		if (currentLocation != 0) {
			const yourLocation = () => {
				mapRef.current.animateToRegion(currentLocation, 3 * 1000);
			};
			yourLocation();
		}
	}, []);

	const mapRef = useRef();


	//// Pour overlay

	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	const [visible2, setVisible2] = useState(false);

	const toggleOverlay2 = () => {
		setVisible2(!visible2);
	};



	return (

		<View style={{ flex: 1 }}>

			{/* La Map principale */}

			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 44.836151,
					longitude: -0.580816,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				ref={mapRef}
			>

				{/* Notre position perso */}

				<Marker key={'currentPos'}
					coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
					image={require('../assets/green-circle.png')}
					onPress={toggleOverlay}
				/>

				{/* Position des publis */}

				<Marker key={'marker'}
					pinColor='blue'
					coordinate={{ latitude: 44.836151, longitude: -0.580816 }}
					onPress={toggleOverlay2}
				/>

				<Marker key={'marker2'}
					pinColor='blue'
					coordinate={{ latitude: 44.9, longitude: -0.59 }}
					onPress={toggleOverlay2}
				/>

			</MapView >

			<Overlay isVisible={visible} onBackdropPress={() => toggleOverlay()}>
				<Text style={styles.textPrimary}>Current position</Text>
			</Overlay>

			<Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
				<Text style={styles.textSecondary}>User</Text>
				<Image source={require('../assets/green-circle.png')} />
			</Overlay>

		</View >
	)
}


const styles = StyleSheet.create({
	button: {
		margin: 10,
	},
	textPrimary: {
		marginVertical: 20,
		textAlign: 'center',
		fontSize: 20,
	},
	textSecondary: {
		marginBottom: 10,
		textAlign: 'center',
		fontSize: 17,
	},

});