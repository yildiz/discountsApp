import React, {Component} from 'react';

import Navigation from './src/Navigation';
import { SafeAreaView } from 'react-navigation';

export default class App extends Component{

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never', top: 'always' }}>
				<Navigation />
			</SafeAreaView>
		);
	}
}