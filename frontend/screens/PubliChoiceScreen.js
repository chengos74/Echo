import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
//-----IMPORT DES ICONS-----//
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faImages, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function PubliChoice(props) {

	// Constante pour pickImage (accéder à la pellicule)
	const [selectedImage, setSelectedImage] = useState(null);

	//Accéder à la pellicule
	const pickImage = async () => {

		// permission d'accéder à la galerie 
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult === false) {
			alert('Permission to access camera roll is required!');
			return;
		};
		// choisir une image
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (result.cancelled === true) {
			return;
		};
		// assigner l'uri de l'image choisie à la state d'état
		if (result !== null) {
			setSelectedImage({ localUri: result.uri });
			props.onSelectImage(result.uri) // on passe l'uri dans le reducer (cameraReducer)
		}
	};
	if (selectedImage !== null) {
		return (
			<View style={{ backgroundColor: '#151515', flex: 1 }}>
				<View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between', alignItems: 'center' }}>
					<TouchableOpacity
						style={{ marginLeft: 10 }}
						title='Back'
						onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
					>
						<FontAwesomeIcon icon={faCircleXmark} size={35} color={'white'} />
					</TouchableOpacity>
					<Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>New publication </Text>
					<TouchableOpacity
						style={styles.square}
						title='Back'
						onPress={() => { props.navigation.navigate("PParams", { screen: "PParams" }); }}
					>
						<Text style={{ color: '#67D692', fontWeight: 'bold', marginRight: 10, fontSize: 17 }}>Next</Text>
					</TouchableOpacity>
				</View>

				<View style={{ alignItems: 'center', paddingTop: 20 }}>
					<View style={{ alignItems: 'center', }}>
						<Image source={{ uri: selectedImage.localUri }} style={{ width: 320, height: 240, borderRadius: 20 }} />
					</View>
				</View>

				<View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20, }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>

						{/* Bouton Pellicule */}
						<TouchableOpacity
							hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
							style={{ marginRight: 10, }}
							title='Pellicule'
							onPress={() => { pickImage() }}
						>
							<FontAwesomeIcon icon={faImages} size={30} color={'#fff'} />
						</TouchableOpacity>

						{/* Bouton Camera */}
						<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, marginRight: 10 }}>/</Text>
						<TouchableOpacity
							hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
							title='Camera'
							onPress={() => { props.navigation.navigate("CameraScreen", { screen: "CameraScreen" }); }}
						>
							<FontAwesomeIcon icon={faCamera} size={30} color={'#fff'} />
						</TouchableOpacity>

					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center', height: 250, marginTop: -25 }}>
					</View>
				</View>
			</View>
		)
	}
	return (
		<View style={{ backgroundColor: '#151515', flex: 1 }}>
			<View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between', alignItems: 'center' }}>
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					title='Back'
					onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
				>
					<FontAwesomeIcon icon={faCircleXmark} size={35} color={'white'} />
				</TouchableOpacity>
				<Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>New publication </Text>
				<TouchableOpacity
					style={styles.square}
					title='Back'
					onPress={() => { props.navigation.navigate("PParams", { screen: "PParams" }); }}
				>
					<Text style={{ color: '#67D692', fontWeight: 'bold', marginRight: 10, fontSize: 17 }}>Next</Text>
				</TouchableOpacity>
			</View>

			<View style={{ alignItems: 'center', paddingTop: 20 }}>

				<View style={{ alignItems: 'center',  width: 320, height: 240, borderRadius: 20, backgroundColor: "grey"  }}>
				</View>
			</View>

			<View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20, }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>

					{/* Bouton Pellicule */}
					<TouchableOpacity
						hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
						style={{ marginRight: 10, }}
						title='Pellicule'
						onPress={() => { pickImage() }}
					>
						<FontAwesomeIcon icon={faImages} size={30} color={'#fff'} />
					</TouchableOpacity>

					{/* Bouton Camera */}
					<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, marginRight: 10 }}>/</Text>
					<TouchableOpacity
						hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
						title='Camera'
						onPress={() => { props.navigation.navigate("CameraScreen", { screen: "CameraScreen" }); }}
					>
						<FontAwesomeIcon icon={faCamera} size={30} color={'#fff'} />
					</TouchableOpacity>

				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center', height: 250, marginTop: -25 }}>
				</View>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({

});

function mapDispatchToProps(dispatch) {
	return {
		onSelectImage: function (uriFromSelectedImage) {
			dispatch({ type: 'imageSelected', uri: uriFromSelectedImage })
		}
	}
}

export default connect(null, mapDispatchToProps)(PubliChoice);