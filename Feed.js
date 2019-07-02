import React, {Component} from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Text from './src/components/Text';
import TabArea from './src/components/Tab';
import Offer from './src/components/Offer';


export default class App extends Component{
  render() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header.container}>
				<Text h1 font="SemiBold">Offers Galore</Text>
				<Image style={styles.profilePic} source={{ uri: "https://randomuser.me/api/portraits/women/95.jpg" }} />
			</View>
			<Image style={styles.promotionImage} source={require("./src/images/nike.png")} />
			<View style={{ paddingBottom: 30 }}>
				<TabArea />
				<View style={styles.offersHeader}>
					<Text font="Regular">Recommended for you</Text>
					<Text font="Regular">Filters ♥</Text>
				</View>

				<Offer title={"10 - 40% OFF"} desc={"Flat Discounts on Every purchase!"} star={"4.5"} category={"Food"} days={"15 Days"} image={"https://randomuser.me/api/portraits/women/33.jpg"} />
				<Offer title={"40 - 60% OFF"} desc={"For first time users"} star={"4.2"} category={"Clothing"} days={"12 Days"} image={"https://randomuser.me/api/portraits/women/7.jpg"} />
				<Offer title={"40% Cashback"} desc={"For Repeat Orders"} star={"4.1"} category={"Food"} days={"11 Days"} image={"https://randomuser.me/api/portraits/women/68.jpg"} />
				<Offer title={"70% OFF"} desc={"For first time users"} star={"4.1"} category={"Food"} days={"7 Days"} image={"https://randomuser.me/api/portraits/women/58.jpg"} />

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
		justifyContent: "space-between"
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: 20,
// 	},
// });
