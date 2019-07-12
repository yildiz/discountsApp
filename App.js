import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';

import Navigation from './src/Navigation';

export default class App extends Component{

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Navigation />
			</SafeAreaView>
		);
	}
}