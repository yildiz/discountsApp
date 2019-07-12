import React, {Component} from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Text from '../components/Text';
import TabArea from '../components/Tab';
import Offer from '../components/Offer';


export default class App extends Component{
  render() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header.container}>
				<Text h1 semibold>Offers Galore</Text>
				<Image style={styles.profilePic} source={{ uri: "https://randomuser.me/api/portraits/women/95.jpg" }} />
			</View>
			<Image style={styles.promotionImage} source={require("../images/nike.png")} />
			<View style={{ paddingBottom: 30 }}>
				<TabArea />
				<View style={styles.offersHeader}>
					<Text color="#94989C">Recommended for you</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text color="#94989C">Filters </Text>
						<Icon name="ios-options" size={15} color="#1D262C" />
					</View>
				</View>

				<Offer onPress={() => this.props.navigation.navigate("Offer")} title={"10 - 40% OFF"} desc={"Flat Discounts on Every purchase!"} star={"4.5"} category={"Food"} days={"15 Days"} image={"https://randomuser.me/api/portraits/women/33.jpg"} />
				<Offer onPress={() => this.props.navigation.navigate("Offer")} title={"40 - 60% OFF"} desc={"For first time users"} star={"4.2"} category={"Clothing"} days={"12 Days"} image={"https://randomuser.me/api/portraits/women/7.jpg"} />
				<Offer onPress={() => this.props.navigation.navigate("Offer")} title={"40% Cashback"} desc={"For Repeat Orders"} star={"4.1"} category={"Food"} days={"11 Days"} image={"https://randomuser.me/api/portraits/women/68.jpg"} />
				<Offer onPress={() => this.props.navigation.navigate("Offer")} title={"70% OFF"} desc={"For first time users"} star={"4.1"} category={"Food"} days={"7 Days"} image={"https://randomuser.me/api/portraits/women/58.jpg"} />

			</View>
		</ScrollView>
	);
  }
}

const styles = {
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 30,
	},
	header: {
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: 20
		}
	},
	profilePic: {
		width: 30, height: 30,
		borderRadius: 50,
	},
	promotionImage: {
		width: "100%",
		borderRadius: 8,
		marginBottom: 20,
	},
	offersHeader: {
		marginVertical: 15,
		flexDirection: 'row',
		justifyContent: "space-between",
		paddingHorizontal: 10
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: 20,
// 	},
// });
