import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import Splash from './Splash';
import Login from './Login';
import Welcome from './Welcome';
import Feed from './Feed';

export default class App extends Component{

	constructor(props) {
		super(props);
		this.state = {
			screen: "Splash"
		}
	}
	
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ screen: "Welcome" })
		}, 750);
	};
	

	goToLogin = () => {
		this.setState({ screen: "Login" })
	}

	goToFeed = () => {
		this.setState({ screen: "Feed" })
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{
					(this.state.screen === "Splash") ? <Splash /> : (this.state.screen === "Welcome") ? <Welcome onPress={this.goToLogin} /> : (this.state.screen === "Login") ? <Login onPress={this.goToFeed} /> : <Feed />
					// <Feed />
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({

});
