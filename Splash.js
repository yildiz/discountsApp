import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class App extends Component{
  render() {
    return (
      <Image source={require("./src/images/splash.png")} resizeMode="cover" style={styles.container} />
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
