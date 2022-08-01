import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function PubliChoice(props) {

	const [pictureChoice, setPictureChoice] = useState('')


	// var preview = 


	var picture = props.mySnaps.map((data, i) => {
		return (
			<Button onPress>
				<Card key={i}>
					<Card.Image
						style={{ width: '30%', height: 80, marginBottom: 10 }}
						source={{ uri: data.url }} ////////////////////////////////////////////////////////
					/>
				</Card>
			</Button>
		)
	})


	return (
		<Container>

			<Button
				icon={<FontAwesomeIcon icon="fa-solid fa-arrow-left" name="arrow-left" size={20} color='#FFFFFF' />}
				title="Go to home"
				type="solid"
				onPress={() => { navigation.navigate('HomePage') }}
			/>

			{preview}

			<ScrollView style={{ marginTop: 25 }}>

				{picture}

			</ScrollView>

		</Container>
	);

};