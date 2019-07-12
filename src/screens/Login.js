import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../components/Button';
import Text from '../components/Text';

const { width } = Dimensions.get('window');

export default class App extends Component{
  render() {
	return (
		<View style={styles.container}>
			<Image source={require("../images/logo.png")} resizeMode="stretch" style={styles.image} />
			<View style={styles.area1}>
				<View>
					<Text h1 semibold align="center">Welcome Aboard!</Text>
					<Text styles={{ marginTop: 10 }} align="center" color="#71828A">Signup to get started with the app. Login if you already have an account.</Text>
				</View>
				<View style={styles.actions}>
					<View style={styles.socialActions}>
						<Button onPress={() => this.props.navigation.navigate("Feed")} row buttonStyle={{ backgroundColor: "transparent", borderColor: "#e7ecee", borderWidth: 2 }}>
							<Icon name="logo-facebook" size={30} color="#4F8EF7" />
						</Button>
						<Button onPress={() => this.props.navigation.navigate("Feed")} row buttonStyle={{ backgroundColor: "transparent", borderColor: "#e7ecee", borderWidth: 2 }}>
							<Icon name="logo-google" size={30} color="#db4437" />
						</Button>
					</View>
					<Button onPress={() => this.props.navigation.navigate("Feed")} title={"Signup with E-mail"} textStyle={{ color: "#fff", semibold: true }}/>
					<Button onPress={() => this.props.navigation.navigate("Login2")} title={"Login to My Account"} buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }} textStyle={{ color: "#000", medium: true }} />
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
