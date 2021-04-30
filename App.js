import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
} from "react-native";
import ReactNativeFusionCharts from "react-native-fusioncharts";

export default class App extends Component {
  constructor(props) {
    super(props);
    //STEP 2 - Chart Data
    const chartData = [
      { label: "Venezuela", value: "250" },
      { label: "Saudi", value: "260" },
      { label: "Canada", value: "180" },
      { label: "Iran", value: "140" },
      { label: "Russia", value: "115" },
      { label: "UAE", value: "100" },
      { label: "US", value: "30" },
      { label: "China", value: "30" },
    ];
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "column2D",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion",
          exportEnabled: 1, // to enable the export chart functionality
        },
        data: chartData,
      },
    };

    this.state = {
      chartConfig,
    };
  }

  version() {
    alert("hello");
    this.apiCaller(`alert(FusionCharts.getVersion("fc"));`); // This method accepts js code in string.
  }
  // Bind the argument from onInitialized with the property you created in your constructor
  bindApiCaller(caller) {
    // Now this.apiCaller will be a function where you can pass js code for the WebView
    // to access the chart Object. See the method changeType.
    this.apiCaller = caller;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          FusionCharts Integration with React Native
        </Text>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            onInitialized={(caller) => {
              this.bindApiCaller(caller);
            }}
          />
        </View>
        <Button
          style={{ margin: 8 }}
          title="Show Version"
          onPress={() => this.version()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  chartContainer: {
    height: 600,
  },
});
