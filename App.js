import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
} from "react-native";
import SingleSeries from "./Components/SingleSeries";
//import TimeSeries from "./Components/TimeSeries";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Single series demo</Text>
        <SingleSeries />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 40,
  },
});
