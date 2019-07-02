import React from 'react';
import { View } from 'react-native';

import Text from '../Text';

const TabArea = (props) => {
	return (
		<View style={styles.container}>
			<View style={[styles.tabItem, styles.activeTab]}><Text color="#1D262C" size={13} ph={10}>All Offers</Text></View>
			<View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Food</Text></View>
			<View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Clothing</Text></View>
			<View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Electronics</Text></View>
			<View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Home</Text></View>
		</View>
	)
};

const styles = {
	container: {
		flexDirection: 'row',
	},
	tabItem: {
		//TODO: borderRadius
		borderBottomWidth: 1,
		borderBottomColor: "#D8D8D8"
	},
	activeTab: {
		borderBottomWidth: 3,
		borderBottomColor: "#1D262C",
	},
	tabText: {
		color: "#D8D8D8",
		fontSize: 13,
		fontFamily: 'Poppins-SemiBold',
		paddingHorizontal: 10,
	},
	activeTabText: {
		color: "#1D262C"
	}
}

export default TabArea;