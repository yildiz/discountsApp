import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import Button from './src/components/Button';
import Text from './src/components/Text';

const { width } = Dimensions.get('window');

export default class App extends Component{
  render() {
	return (
		<View style={styles.container}>
			<Image source={require("./src/images/logo.png")} resizeMode="stretch" style={styles.image} />
			<View style={styles.area1}>
				<View>
					<Text h1 semibold align="center">Welcome Aboard!</Text>
					<Text  align="center" color="#71828A">Signup to get started with the app. Login if you already have an account.</Text>
				</View>
				<View style={styles.actions}>
					<View style={styles.socialActions}>
						<Button row title={"FB"} buttonStyle={{ backgroundColor: "transparent", borderColor: "#e7ecee", borderWidth: 2 }} textStyle={{ color: "#000" }} />
						<Button row title={"GGL"} buttonStyle={{ backgroundColor: "transparent", borderColor: "#e7ecee", borderWidth: 2 }} textStyle={{ color: "#000" }} />
					</View>
					<Button onPress={this.props.onPress} title={"Signup with E-mail"} textStyle={{ color: "#fff" }} />
					<Button title={"Login to My Account"} buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }} textStyle={{ color: "#000" }} />
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
