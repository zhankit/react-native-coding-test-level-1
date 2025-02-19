import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {

	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Button
				testID='contactUs'
				style={styles.button}
				onPress={() => { navigation.navigate('ContactUsScreen')}}
				mode='contained'
			>{'Contact Us'}</Button>
			<Button
				testID='Pokedex'
				style={styles.button}
				onPress={() => { navigation.navigate('Pokedex')}}
				mode='contained'
			>
			{'View Catalog'}
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: '90%',
		marginHorizontal: 20,
		marginVertical: 5
	}
  });


export default MainScreen;
