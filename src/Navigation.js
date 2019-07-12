import React from 'react';
import { View } from 'react-native';
import Text from './components/Text';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Login2 from './screens/Login2';
import Welcome from './screens/Welcome';
import Feed from './screens/Feed';
import Offer from './screens/Offer';


const InactiveTab = props => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text h1 bold>Another Tab</Text>
		</View>
	)
}


const tabNavigator = createBottomTabNavigator({
	Feed: {
		screen: Feed
	},
	Feed2: { screen: InactiveTab },
	Feed3: { screen: InactiveTab },
	Feed4: { screen: InactiveTab },
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor, icon }) => {
			const { routeName } = navigation.state;
			let iconName;

			if (routeName === 'Feed') {
				iconName = "ios-home";
			} else if (routeName === 'Feed2') {
				iconName = `ios-star-outline`;
			} else if (routeName === 'Feed3') {
				iconName = `ios-search`;
			} else if (routeName === 'Feed4') {
				iconName = `ios-options`;
			}

			return <Icon name={iconName} size={25} color={tintColor}/>
		},
	  }),
	  tabBarOptions: {
		showLabel: false,
		tabStyle: {
			borderTopWidth: 0
		},
		activeTintColor: '#1D262C',
		inactiveTintColor: '#94989C',
	  },
   
})

const navigator = createStackNavigator({
	Splash,
	Login,
	Login2,
	Welcome,
	TabNavigator: tabNavigator,
	Offer,
}, {
	headerMode: 'none'
});

export default createAppContainer(navigator);