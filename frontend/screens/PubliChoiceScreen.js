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

			<Text>{"\n"}</Text>

			<View style={{ paddingLeft:10 }}>
				<TouchableOpacity
					style={styles.squareBis}
					title='Back'
					onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowLeft} size={35} color={'black'} />
				</TouchableOpacity>
			</View>

			<View style={{ alignItems: 'flex-end' }}>
				<TouchableOpacity
					style={styles.squareBis}
					title='Back'
					onPress={() => { props.navigation.navigate("PParams", { screen: "PParams" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowRight} size={35} color={'black'} />
				</TouchableOpacity>
			</View>

			<View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity
						style={styles.square}
						title='Camera'
						onPress={() => { props.navigation.navigate("CameraScreen", { screen: "CameraScreen" }); }}
					>
						<FontAwesomeIcon icon={faCamera} size={50} color={'black'} />
					</TouchableOpacity>
				</View>

				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity
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

	square: {
		width: 53,
		height: 50,
		margin: 4,
	},

	squareBis: {
		width: 40,
		height: 40,
		margin: 4,
	},

});
