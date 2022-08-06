import React, { useEffect, useState, Components } from "react";
import { StyleSheet, View } from "react-native";

// ATTENTION : BALISES BUTTON, OVERLAY ET INPUT --> UTILISER LA DOC RNEUI 4.0.0.RC6 

// NE PAS IMPORTER DES ÉLÉMENTS DEPUIS REACT NATIVE ELEMENTS --> CONFLIT 

// IMPORTER UNIQUEMENT DES ÉLÉMENTS DEPUIS @RNEUI/THEMED OU @RNEUI/BASE
import { Button, Overlay, Input } from "@rneui/themed";

import Icon from "react-native-vector-icons/FontAwesome";

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';  
// (deprecated)

import { connect } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
// Importer un tunnel websocket avec la librairie Socket.io
import socketIOClient from "socket.io-client";

// Créer un tunnel
// var socket = socketIOClient('http://192.168.1.12:3000'); // Adresse IP locale

export const getCurrentLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
	});
};


export default function MapScreen(props) {

	//// Mise en place de la géolocalisation
	const [currentLatitude, setCurrentLatitude] = useState(0);
	const [currentLongitude, setCurrentLongitude] = useState(0);

	//// State pour pouvoir dire : si on press le bouton rouge 'Add POI'
	// const [addPOI, setAddPOI] = useState(false)

	//// Stockage temporaire des POI avant de mettre dans listPOI
	// const [tempPOI, setTempPOI] = useState();

	//// State qui contiendra tous les ajouts de POI
	// const [listPOI, setListPOI] = useState([])

	//// State pour afficher le Overlay
	// const [isVisible, setIsVisible] = useState(false)

	//// Pour customiser le POI - apparaitra dans le Overlay
	// const [titrePOI, setTitrePOI] = useState()
	// const [descPOI, setDescPOI] = useState()

	// Bonus part4 : tracker la position d'un utilisateur exterieur
	// Liste des positions des users
	// const [listUser, setListUser] = useState([])


	// const getCurrentLocation = () => {
	// 	return new Promise((resolve, reject) => {
	// 		navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
	// 	});
	// };

	// class MyMap extends Components {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			region: defaultRegion,
	// 		};
	// 	}

	// 	componentDidMount() {
	// 		return getCurrentLocation().then(position => {
	// 		  if (position) {
	// 		    this.setState({
	// 		      region: {
	// 			latitude: position.coords.latitude,
	// 			longitude: position.coords.longitude,
	// 			latitudeDelta: 0.003,
	// 			longitudeDelta: 0.003,
	// 		      },
	// 		    });
	// 		  }
	// 		});
	// 	      }
	// 	    }


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
						// Commenter les deux lignes au dessus pour pouvoir tester le Bonus part4 seul

						// Bonus part4 : tracker la position d'un utilisateur exterieur
						// On transmets pseudo + position au backend à travers un tunnel 'userLocation'
						// socket.emit("userLocation", {
						// 	pseudo: props.pseudo,
						// 	longitude: location.coords.longitude,
						// 	latitude: location.coords.latitude
					});
			}
		}


		askPermissions()

		// AsyncStorage.getItem('POI', (err, value) => {
		// 	if (value) {
		// 		var POI = JSON.parse(value);
		// 		setListPOI(POI);
		// 	}
		// }
		// );

	}, [])


	//// Extra du Bonus : POIScreen
	//// On récupère listPOI du store et on synchronise avec le listPOI présent ici
	// useEffect(() => {
	// 	setListPOI(props.POI)
	// }, [props.POI])


	// Bonus part4 : tracker la position d'un utilisateur exterieur
	// Mettre à jour listUser dès qu'un user bouge
	// useEffect(() => {
	// 	socket.on('userLocationToAll', (userIsMoving) => {
	// 		// On veut réécraser la position d'un user (on ne veut pas le tracé GPS entier)
	// 		// On fait une copie des users
	// 		var listUserCopy = [...listUser];
	// 		// On supprime la position d'avant : filter renvoi un tableau propre, avec toutes les positions des users, sauf le même user qui a bougé
	// 		listUserCopy = listUserCopy.filter(user => user.pseudo != userIsMoving.pseudo);
	// 		// Et on push la nouvelle position du user qui bouge
	// 		listUserCopy.push(userIsMoving)
	// 		// On met à jour listUser
	// 		setListUser(listUserCopy);
	// 	});
	// }, [listUser]);


	//// Fonction quand on press sur la map directement.
	var selectPOI = (e) => {
		// Seulement si on a activé le bouton 'Add POI' avant.
		if (addPOI) {
			setAddPOI(false); // Pour remettre le bouton 'AddPOI' en rouge
			setTempPOI({
				latitude: e.nativeEvent.coordinate.latitude,
				longitude: e.nativeEvent.coordinate.longitude
			});
			// Pour stocker les coordonnées de là où on a appuyé
			// Doc : e.nativeEvent.coordinate = quand on press sur la map
			setIsVisible(true); // Pour afficher l'overlay
		}
	}

	//// Fonction déclenchée quand on valide un POI dans le overlay
	// var handleSubmit = () => {

	// 	var copyListPOI = [...listPOI, { longitude: tempPOI.longitude, latitude: tempPOI.latitude, titre: titrePOI, description: descPOI }];
	// 	// var copyListPOI = [...props.POI, { #long+lat# }]

	// 	// setListPOI(copyListPOI); // On retire ça car on a le store + local storage
	// 	setIsVisible(false); // Pour fermer l'overlay
	// 	setTempPOI(null); // null = pour réinitialiser les valeurs
	// 	setDescPOI(null);
	// 	setTitrePOI(null);

	// 	//Bonus : pour envoyer au store Redux
	// 	props.onSubmitListPOI(copyListPOI);

	// 	// Mettre les POI dans localStorage
	// 	AsyncStorage.setItem("POI", JSON.stringify(copyListPOI));
	// }

	// console.log(tempPOI);
	// console.log(listPOI);

	//// Pour afficher toutes les POI qu'on a rajouté
	// var markerPOI = listPOI.map((POI, i) => {
	// 	return <Marker key={i}
	// 		pinColor="blue"
	// 		coordinate={{ latitude: POI.latitude, longitude: POI.longitude }}
	// 		title={POI.titre}
	// 		description={POI.description}
	// 	/>
	// });

	// Bonus part4 : tracker la position d'un utilisateur exterieur
	// var markerUser = listUser.map((user, i) => {
	// 	return <Marker key={i}
	// 		pinColor="red"
	// 		coordinate={{ latitude: user.latitude, longitude: user.longitude }}
	// 		title={user.pseudo}
	// 	/>
	// });

	//// Condition pour que le bouton rouge 'Add POI' deviennent gris quand on appuye dessus
	// var isDisabled = false;
	// if (addPOI) {
	// 	isDisabled = true;
	// }


	return (
		<View style={{ flex: 1 }}>

			{/* Overlay pour mettre les détails d'un POI */}
			{/* <Overlay
			isVisible={isVisible}
			onBackdropPress={() => { setIsVisible(false) }}
		>
			<View>
				<Input
					containerStyle={{ marginBottom: 25 }}
					placeholder='titre'
					onChangeText={(val) => setTitrePOI(val)}

				/>

				<Input
					containerStyle={{ marginBottom: 25 }}
					placeholder='description'
					onChangeText={(val) => setDescPOI(val)}

				/>

				<Button
					title="Ajouter le POI"
					buttonStyle={{ backgroundColor: "#eb4d4b" }}
					onPress={() => handleSubmit()}
					type="solid"
				/>
			</View>
		</Overlay> */}

			{/* La Map principale */}
			{/* <MapView
				onPress={(e) => { selectPOI(e) }}
				style={{ flex: 1 }}
				initialRegion={{
					latitude: origin.latitude,
					longitude: origin.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			> */}

			<MapView ref={map => { this.map = map }} />

			{/* { componentDidMount } */}

			{/* Notre position perso */}
			<Marker key={'currentPos'}
				pinColor='green'
				title='Hello'
				description="I'm here"
				coordinate={{ latitude: currentLatitude, longitude: currentLongitude }}
			/>

			{/* Tous les POI qu'on a rajouté */}
			{/* {markerPOI} */}

			{/* Bonus part4 : tracker la position d'un utilisateur exterieur */}
			{/* {markerUser} */}


			{/* Le button principal 'Add POI' */ }
	{/* <Button
			disabled={isDisabled}
			title='Add POI'
			icon={<Icon name='map-marker' size={20} color='#ffffff' />}
			buttonStyle={{ backgroundColor: '#ab4d4b' }}
			type='solid'
			onPress={() => setAddPOI(true)}
		/> */}
		</View >
	)
}

//// Extra : pour lire le listPOI du store et le synchroniser avec le listPOI présent ici
// function mapStateToProps(state) {
// 	return { POI: state.listPOI, pseudo: state.pseudo }
// }

//// Pour envoyer les POI au store Redux, à travers le reducer : listPOI.js
// function mapDispatchToProps(dispatch) {
// 	return {
// 		onSubmitListPOI: function (POI) {
// 			dispatch({ type: 'savePOI', POI: POI })
// 		}
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(MapScreen)