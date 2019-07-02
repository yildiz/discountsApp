import React, {Component} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import Text from './src/components/Text';

export default class App extends Component{
  render() {
	return (
		<View style={styles.container}>
			<Image source={require("./src/images/welcome.png")} resizeMode="stretch" style={styles.image} />
			<View style={styles.area1}>
				<View>
					<Text align={"center"} h1>Cheers to Discounts!</Text>
					<Text align={"center"} color={"#71828A"} font="Regular">Curabitur lobortis id lorem bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.</Text>
				</View>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Text font="SemiBold" size={13} color={"#fff"} size={13}>Get started</Text>
				</TouchableOpacity>
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
		marginBottom: 40,
	},
	area1: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		paddingHorizontal: 50,
	},
	button: {
		backgroundColor: "#0074e4",
		borderColor: "#71828A",
		height: 44,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		width: "100%"
	},
	buttonText: {
		fontFamily: "Poppins-SemiBold",
		fontSize: 13,
		color: "#fff",
	}
});
