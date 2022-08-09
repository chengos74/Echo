import React, { useEffect, useState, useRef, Components } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

// ATTENTION : BALISES BUTTON, OVERLAY ET INPUT --> UTILISER LA DOC RNEUI 4.0.0.RC6 

// NE PAS IMPORTER DES ÉLÉMENTS DEPUIS REACT NATIVE ELEMENTS --> CONFLIT 

// IMPORTER UNIQUEMENT DES ÉLÉMENTS DEPUIS @RNEUI/THEMED OU @RNEUI/BASE
import { Button, Overlay, Input } from "@rneui/themed";

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { TouchableOpacity } from "react-native";




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


	//// Pour modal

	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
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
					title='Current position'
					coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
					image={require('../assets/green-circle.png')}
				/>

				{/* Position des publis */}

				<View>
						<Marker key={'marker'}
							pinColor='blue'
							coordinate={{ latitude: 44.836151, longitude: -0.580816 }}
							onPress={toggleOverlay}
							hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
						/>
					<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
						<Text style={styles.textPrimary}>User</Text>
						<Image
							style={styles.tinyLogo}
							source={require('../assets/green-circle.png')}
						/>
					</Overlay>
				</View>

			</MapView>

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