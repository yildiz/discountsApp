import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Text from '../Text';

const TAB_LIST = [
	"All",
	"Food",
	"Clothing",
	"Electronics",
	"Home"
]

export default class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state =  {
			activeTab: "All"
		}
	}

	changeTab = activeTab => {
		this.setState({ activeTab });
	}

	render() {
		return (
			<View style={styles.container}>
				{

					TAB_LIST.map((tab, i) => {
						return <TouchableOpacity key={tab} onPress={() => this.changeTab(tab)} style={[styles.tabItem, this.state.activeTab === tab ? styles.activeTab : null]}><Text color={this.state.activeTab === tab ? "#1D262C" : "#D8D8D8"} size={13} ph={10} semibold>{tab}</Text></TouchableOpacity>
					})

				// <TouchableOpacity style={[styles.tabItem, this.state.activeTab === "all" ? styles.activeTab : null]}><Text color="#1D262C" size={13} ph={10}>All Offers</Text></TouchableOpacity>
				// <TouchableOpacity style={[styles.tabItem, this.state.activeTab === "food" ? styles.activeTab : null]}><Text color="#D8D8D8" size={13} ph={10}>Fooad</Text></TouchableOpacity>
				// <View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Clothing</Text></View>
				// <View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Electronics</Text></View>
				// <View style={styles.tabItem}><Text color="#D8D8D8" size={13} ph={10}>Home</Text></View>
				}
			</View>
		)
	}
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