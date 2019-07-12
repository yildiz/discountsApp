import React, {Component} from 'react';
import { StyleSheet, View, Image, TextInput, Dimensions } from 'react-native';

import Button from '../components/Button';
import Text from '../components/Text';

const { width } = Dimensions.get('window');

export default class App extends Component{
	state = {
		value: ""
	};
	render() {
		return (
			<View style={styles.container}>
				<Image source={require("../images/logo.png")} resizeMode="stretch" style={styles.image} />
				<View style={styles.area1}>
					<View>
						<Text h1 semibold align="center">Welcome Aboard!</Text>
						<Text  align="center" color="#71828A">Signup to get started with the app. Login if you already have an account.</Text>
					</View>
					<View style={styles.actions}>
						<TextInput />
					</View>
				</View>
			</View>
		);
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	image: {
		width: "100%",
	},
	area1: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		paddingHorizontal: 50,
	},
	actions: {
		flexDirection: "column",
		alignSelf: 'stretch',
		alignItems: "center",
	},
	socialActions: {
		flexDirection: "row",

	},
	titleText: {
		textAlign: "center",
		fontSize: 20,
		color: "#000",
		fontFamily: "Poppins-SemiBold"
	},
	descText: {
		textAlign: "center",
		fontSize: 12,
		color: "#71828A",
		fontFamily: "Poppins-Regular"
	}
});
