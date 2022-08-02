import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Image, Touchable, StyleSheet } from 'react-native';
import { View, Text } from "react-native"
import * as ImagePicker from 'expo-image-picker';
// import Home from './screens/HomePage';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faImages, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function PubliChoice(props) {

	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		// console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View>
			<View>
				<TouchableOpacity
					// style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}
					style={styles.squareBis}
					title='Back'
					onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowLeft} size={35} color={'black'} />
				</TouchableOpacity>
			</View>

			<View style={{ alignItems: 'flex-end' }}>
				<TouchableOpacity
					// style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginTop: '5%', marginLeft: '84%' }}
					style={styles.squareBis2}
					title='Back'
					onPress={() => { props.navigation.navigate("PParams", { screen: "PParams" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowRight} size={35} color={'black'} />
				</TouchableOpacity>
			</View>

			<View>
				<View style={{ alignItems: 'center', justifyContent: 'center'}}>
					<TouchableOpacity
						style={styles.square}
						// style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: '30%', borderWidth: 2 }}
						title='Camera'
						onPress={() => { props.navigation.navigate("CameraScreen", { screen: "CameraScreen" }); }}
					>
						<FontAwesomeIcon icon={faCamera} size={50} color={'black'} />
					</TouchableOpacity>
				</View>

				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity
						// style={{ flex: 1, alignItems: 'center', paddingTop: '45%', marginRight: '2%', borderWidth: 2, borderColor: 'red' }}
						style={styles.square}
						title="Camera roll"
						onPress={pickImage}
					>
						<FontAwesomeIcon icon={faImages} size={50} color={'black'} />
					</TouchableOpacity>
				</View>
			</View>


			{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


		</View>

	);

};


const styles = StyleSheet.create({
	// container: {
	// 	marginTop: 125,
	// 	marginLeft: 225,
	// },

	square: {
		backgroundColor: "#7cb48f",
		width: 53,
		height: 50,
		margin: 4,
		borderWidth: 2,
	},

	squareBis: {
		backgroundColor: "#7cb48f",
		width: 40,
		height: 40,
		margin: 4,
		borderWidth: 2,
	},

	squareBis2: {
		backgroundColor: "#7cb48f",
		width: 40,
		height: 40,
		margin: 4,
		borderWidth: 2,
	},

});