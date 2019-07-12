import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class App extends Component{
  componentWillMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Welcome");
    }, 1000);
  };
  
  render() {
    return (
      <Image source={require("../images/splash.png")} resizeMode="cover" style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});
