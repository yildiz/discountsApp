import React from 'react';
import { View, Image } from 'react-native';

import Text from '../Text';

const Offer = (props) => {
	return (
		<View style={styles.container}>
			<View style={{ flex: 0.5 }} />
			<View style={{ flex: 2 }}>
				<Image style={styles.marketPicture} source={{ uri: props.image }} />
			</View>
			<View style={{ flex: 7 }}>
				<Text size={14}>{props.title}</Text>
				<Text size={12} font="Regular" color={"#9399A3"}>{props.desc}</Text>
				<View style={styles.ratings}>
					<View style={[styles.star.bg, styles.rateItem]}><Text color={"#1D262C"} font="Medium">♥ {props.star}</Text></View>
					<View style={[styles.category.bg, styles.rateItem]}><Text color={"#0074E4"} font="Medium">{props.category}</Text></View>
					<View style={[styles.days.bg, styles.rateItem]}><Text color={"#CF1E43"} font="Medium">{props.days}</Text></View>
				</View>
			</View>
		</View>
	)
};

const styles = {
	container: {
		borderColor: "#E7ECEE",
		borderWidth: 1,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: 'center',
		paddingVertical: 10,
		marginBottom: 20
	},
	marketPicture: {
		width: 50, height: 50,
		borderRadius: 50,
	},
	ratings: {
		flexDirection: 'row',
	},
	rateItem: {
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

export default Offer;