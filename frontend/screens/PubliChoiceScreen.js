import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { View, Text } from "react-native"
import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faImages, faCircleArrowLeft, faCircleArrowRight, faClose, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export default function PubliChoice(props) {

	// Constante pour pickImage (accéder à la pellicule)
	const [image, setImage] = useState(null);

	// Accéder à la pellicule
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
		}

		// return (
		// 	<View>{pickImage}</View>
		// )
	};

	return (
		<View style={{ backgroundColor: '#151515' }}>
			<View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', alignItems: 'center' }}>

				<TouchableOpacity
					style={{ marginLeft: 10 }}
					title='Back'
					onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
				>
					<FontAwesomeIcon icon={faCircleXmark} size={35} color={'white'} />
				</TouchableOpacity>

				<Text style={{ fontWeight: 'bold', color: 'white' }}>New publication </Text>




				<TouchableOpacity
					style={styles.square}
					title='Back'
					onPress={() => { props.navigation.navigate("PParams", { screen: "PParams" }); }}
				>
					<Text style={{ color: '#94FFBD', fontWeight: 'bold', marginRight: 10, fontSize: 17 }}>Next</Text>
				</TouchableOpacity>


			</View>

			{/* <Text style={{ flexDirection: 'row', alignContent: 'stretch', flexWrap: 'wrap', marginTop: 20, borderWidth: 2, justifyContent: 'center' }}>
				<TouchableOpacity
					style={styles.square}
					title='Back'
					onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowLeft} size={35} color={'#7E7E7E'} />
				</TouchableOpacity>

				<View style={{ borderWidth: 2, marginRight: 10, justifyContent:'center' }}>
				<Text style={{ fontWeight: 'bold', justifyContent: 'center' }}>New publication
				</Text>
				</View>
				<View style={{ color: 'blue', borderWidth: 2 }}>
				<Text style={{ color: 'blue', fontWeight: 'bold' }}>Next</Text>
				</View>
			</Text> */}


			<View style={{ alignItems: 'center', paddingTop: 20 }}>
				<View style={{ justifyContent: 'center', alignItems: 'flex-end', borderWidth: 2, width: '90%', height: 210, backgroundColor: 'white', borderRadius: 20 }}>
				</View>
			</View>

			<View style={{ alignItems: 'center', justifyContent: 'center', height: 250 }}>

				<View style={{ alignItems: 'center', justifyContent: 'center', height: 250 }}>
					<TouchableOpacity
						title='Camera'
						onPress={() => { props.navigation.navigate("CameraScreen", { screen: "CameraScreen" }); }}
					>
						<FontAwesomeIcon icon={faCamera} size={200} color={'#7E7E7E'} />
					</TouchableOpacity>
				</View>



				<View style={{ alignItems: 'center', justifyContent: 'center', height: 250, marginTop: -25 }}>
					{pickImage}
				</View>

			</View>
		</View>
	)

};


const styles = StyleSheet.create({

});