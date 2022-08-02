import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function InsertCheck(props) {

	const UselessTextInput = (props) => {
		return (
			<TextInput
				{...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
				editable
				maxLength={40}
			/>
		);
	}

	const UselessTextInputMultiline = () => {
		const [value, onChangeText] = React.useState('Description');

		// If you type something in the text box that is a color, the background will change to that
		// color.
		return (
			<View
				style={{
					backgroundColor: value,
					borderBottomColor: '#000000',
					borderBottomWidth: 1,
				}}>
				<UselessTextInput
					multiline
					numberOfLines={2}
					onChangeText={text => onChangeText(text)}
					value={value}
					style={{ padding: 10 }}
				/>
			</View>
		);
	}


	// const [text, onChangeText] = React.useState("");

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView>

				<TouchableOpacity
					style={{ flex: 1, marginTop: '5%', marginLeft: '5%' }}
					title='Back'
					onPress={() => { props.navigation.navigate("Publication", { screen: "PChoice" }); }}
				>
					<FontAwesomeIcon icon={faCircleArrowLeft} size={35} color={'black'} />
				</TouchableOpacity>

				<Text
					style={{ marginTop: '5%', marginLeft: '35%' }}
				>
					Fichier choisi
				</Text>


				<Text style={styles.container}>
					<Text
					// style={{ marginTop: '60%', marginLeft: '35%' }}
					>
						Publier
					</Text>

					<TouchableOpacity
						// style={{ flex: 1, marginLeft: '85%', marginTop: '60%' }}
						title='Publier'
						onPress={() => { props.navigation.navigate("Home", { screen: "Home" }); }}
					>
						<FontAwesomeIcon icon={faCircleArrowRight} size={35} color={'black'} />
					</TouchableOpacity>
				</Text>

				<Text>Scroll bar :  périmètre</Text>

				<Text>{"\n"}</Text>

				<Text>Option Ephémère</Text>

				<Text>{"\n"}</Text>

				<UselessTextInputMultiline />

				{/* <TextInput
				multiline
				// numberOfLines={6}
				onChangeText={onChangeText}
				value={text}
				style={styles.input}
			/> */}

			</ScrollView >
		</KeyboardAvoidingView>

	)
}


const styles = StyleSheet.create({
	container: {
		marginTop: 125,
		marginLeft: 225,
	},

	input: {
		borderWidth: 2,
		paddingBottom: '40%',
		padding: 10,
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: '70%',
		borderRadius: 20,
		maxHeight: 200,
		height: 40,
	}

});