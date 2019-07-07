import React, {Component} from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Text from './src/components/Text';
import Button from './src/components/Button';
import Offer from './src/components/Offer';


export default class OfferScreen extends Component{
  render() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header.container}>
				<Text h1 semibold>Geri</Text>
				<Text h1 semibold>♥</Text>
			</View>
			<View style={styles.offerDetails}>
				<View style={{ flex: 2 }}>
					<Image style={styles.marketPicture} source={{ uri: "https://randomuser.me/api/portraits/women/95.jpg" }} />
				</View>
				<View style={{ flex: 7 }}>
					<Text size={14}>10-50% Off</Text>
					<Text size={12} color={"#9399A3"}>Flat discounts on every food purchase on above 50$. T&C Apply</Text>
					<View style={styles.ratings}>
						<View style={[styles.star.bg, styles.rateItem]}><Text color={"#1D262C"} medium>♥ 4.5</Text></View>
						<View style={[styles.category.bg, styles.rateItem]}><Text color={"#0074E4"} medium>Food</Text></View>
						<View style={[styles.days.bg, styles.rateItem]}><Text color={"#CF1E43"} medium>11 Days Left</Text></View>
					</View>
				</View>
			</View>
			<ScrollView horizontal={true} style={{ backgroundColor: "red" }}>
				<Image style={styles.promotionImage} source={require("./src/images/nike.png")} />
				<Text>sadsa</Text>
			</ScrollView>

			<View style={styles.offer.container}>
				<Text size={14} regular>Offer Details</Text>
				<View style={styles.offer.row}>
					<Text color="#71828A">Branch Location</Text>
					<Text>New York, NY</Text>
				</View>
				<View style={styles.offer.row}>
					<Text color="#71828A">Phone</Text>
					<Text>+1 532-512-5125</Text>
				</View>
				<View style={styles.offer.row}>
					<Text color="#71828A">Website</Text>
					<Text>mcdonalds.com</Text>
				</View>
				<View style={styles.offer.row}>
					<Text color="#71828A">Offer Validity</Text>
					<Text>May, 2077</Text>
				</View>
			</View>

			<Button title="Claim this Offer" />

			<Text style={{ marginVertical: 20 }} size={13} color="#9399A3">Related Offers</Text>
			<Offer title={"10 - 40% OFF"} desc={"Flat Discounts on Every purchase!"} star={"4.5"} category={"Food"} days={"15 Days"} image={"https://randomuser.me/api/portraits/women/33.jpg"} />
				<Offer title={"40 - 60% OFF"} desc={"For first time users"} star={"4.2"} category={"Clothing"} days={"12 Days"} image={"https://randomuser.me/api/portraits/women/7.jpg"} />
				<Offer title={"40% Cashback"} desc={"For Repeat Orders"} star={"4.1"} category={"Food"} days={"11 Days"} image={"https://randomuser.me/api/portraits/women/68.jpg"} />
				<Offer title={"70% OFF"} desc={"For first time users"} star={"4.1"} category={"Food"} days={"7 Days"} image={"https://randomuser.me/api/portraits/women/58.jpg"} />
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

	offer: {
		container: {
			borderColor: "#E7ECEE",
			borderWidth: 1,
			borderRadius: 8,
			paddingVertical: 10,
			paddingHorizontal: 20,
			marginBottom: 20,
			marginTop: 20
		},
		row: {
			flexDirection: "row",
			justifyContent: "space-between"
		}
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
	},

	offerDetails: {
		flexDirection: "row",
		alignItems: 'flex-start',
		paddingVertical: 10,
		marginBottom: 20
	},
	marketPicture: {
		width: 50, height: 50,
		borderRadius: 25,
	},
	ratings: {
		flexDirection: 'row',
	},
	rateItem: {
		marginTop: 20,
		marginRight: 10,
		borderRadius: 50,
		paddingHorizontal: 10,
		paddingVertical: 2,
		minWidth: "12%",
		justifyContent: 'center',
		alignItems: 'center',
	},
	star: {
		bg: {
			backgroundColor: "#FFF9E5",
		},
	},
	category: {
		bg: {
			backgroundColor: "#E5F1FC",
		},
	},
	days: {
		bg: {
			backgroundColor: "#FAE8EC",
		},
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: 20,
// 	},
// });
