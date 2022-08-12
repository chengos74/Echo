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


	//// Ce useEffect permet de pas avoir de bugs qd je fais un background touch sur les POI MAIS pk ??

	// useEffect(() => {
	//  const currentLocation = {
	//    latitude: currentLatitude,
	//    longitude: currentLongitude,
	//    latitudeDelta: 0.05,
	//    longitudeDelta: 0.05,
	//  };

	//  if (currentLocation != 0) {
	//    const yourLocation = () => {
	//      mapRef.current.animateToRegion(currentLocation, 3 * 1000);
	//    };
	//    yourLocation();
	//  }
	// }, []);


	const mapRef = useRef();


	//// Récup les éléments d'une publiication en base de données (pseudo, avatar, latitude, longitude)

	// const [pseudo, setPseudo] = useState([]);
	// const [avatar, setAvatar] = useState([]);
	// const [latitude, setLatitude] = useState([]);
	// const [longitude, setLongitude] = useState([]);

	// useEffect(() => {
	// 	const ip = '172.20.10.3'
	// 	const getPosts = async () => {
	// 		var rawResponse = await fetch('http://' + ip + ':3000/post-content')

	// 		let response = await rawResponse.json()
	// 		console.log("response :" + JSON.stringify(response));

	// 		console.log('pseudo : ' + response.result[0].pseudo)
	// 		console.log(JSON.stringify(response))
	// 		console.log(pseudo)
	// 	}
	// 	getPosts();

	// 	console.log('pseudofront : ' + pseudo)
	// 	console.log('avatarfront : ' + avatar)
	// 	console.log('latitudefront : ' + latitude)
	// 	console.log('longitudefront : ' + longitude)

	// }, [])


	// const ip = '172.20.10.3'
	// 	const getPosts = async () => {
	// 		var rawResponse = await fetch('http://' + ip + ':3000/post-content')

	// 		let response = await rawResponse.json()
	// 		console.log("response :" + JSON.stringify(response));


	//// Pour overlays

	const [visible, setVisible] = useState(false);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

	const [visible2, setVisible2] = useState(false);

	const toggleOverlay2 = () => {
		setVisible2(!visible2);
	};

	const [visible3, setVisible3] = useState(false);

	const toggleOverlay3 = () => {
		setVisible3(!visible3);
	};

	const [visible4, setVisible4] = useState(false);

	const toggleOverlay4 = () => {
		setVisible4(!visible4);
	};


	//// Injections JSX

	// var markers = response.result.map((data) => {
	// 	console.log('data.pseudo : ' + data.pseudo)
	// 	setPseudo([...pseudo, data.pseudo]);
	// 	setAvatar(data.avatar);
	// 	setLatitude(data.latitude);
	// 	setLongitude(data.longitude);
	// 	return (
	// 		<Marker key={data.pseudo}
	// 			pinColor='blue'
	// 			coordinate={{ latitude: data.latitude, longitude: data.longitude }}
	// 			onPress={toggleOverlay2}
	// 		/>
	// 	)
	// })

	// var overlay2 = response.result.map((data) => {
	// 	return (
	// 		<Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
	// 			<Text style={styles.textSecondary}>{data.pseudo}</Text>
	// 			<Image source={data.avatar} />
	// 		</Overlay>
	// 	)
	// })


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

				{/* {markers} */}

				<Marker key={'marker'}
					pinColor='blue'
					coordinate={{ latitude: 44.836151, longitude: -0.580816 }}
					onPress={toggleOverlay2}
				/>

				<Marker key={'marker2'}
					pinColor='blue'
					coordinate={{ latitude: 44.846543, longitude: -0.593456 }}
					onPress={toggleOverlay3}
				/>

				<Marker key={'marker3'}
					pinColor='blue'
					coordinate={{ latitude: 44.852345, longitude: -0.586754 }}
					onPress={toggleOverlay4}
				/>


			</MapView >

			<Overlay isVisible={visible} onBackdropPress={() => toggleOverlay()}>
				<Text style={styles.textPrimary}>Current position</Text>
			</Overlay>

			{/* {overlay2} */}

			<Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
				<Text style={styles.textSecondary}>Arthur</Text>
				<Image style={{ height: 250, width: 280}} source={require("../assets/photo/photo6.jpg")} />
			</Overlay>

			<Overlay isVisible={visible3} onBackdropPress={toggleOverlay3}>
				<Text style={styles.textSecondary}>Tom</Text>
				<Image style={{ height: 250, width: 280}} source={require("../assets/photo/photo2.jpg")} />
			</Overlay>

			<Overlay isVisible={visible4} onBackdropPress={toggleOverlay4}>
				<Text style={styles.textSecondary}>Groot</Text>
				<Image style={{ height: 250, width: 280}} source={require("../assets/photo/photo3.jpg")} />
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