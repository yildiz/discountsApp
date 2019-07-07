import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import Splash from './Splash';
import Login from './Login';
import Login2 from './Login2';
import Welcome from './Welcome';
import Feed from './Feed';
import Offer from './Offer';

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
			<SafeAreaView style={{ flex: 1 }}>
				{
					(this.state.screen === "Splash") ? <Splash /> : (this.state.screen === "Welcome") ? <Welcome onPress={this.goToLogin} /> : (this.state.screen === "Login") ? <Login onPress={this.goToFeed} /> : <Feed />
					//<Feed />
					//<Offer />
					//<Login2 />
				}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({

});
