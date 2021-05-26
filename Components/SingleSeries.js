import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeFusionCharts from "react-native-fusioncharts";

licenseConfig = {
  key: "",
  creditLabel: false, // true/false to show/hide watermark respectively
};
export default class SingleSeries extends Component {
  constructor(props) {
    super(props);

    const chartConfig = {
      type: "column2D",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Column Chart",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion",
          exportEnabled: 1,
        },
        data: [
          { label: "Venezuela", value: "250" },
          { label: "Saudi", value: "260" },
          { label: "Canada", value: "180" },
          { label: "Iran", value: "140" },
          { label: "Russia", value: "115" },
          { label: "UAE", value: "100" },
          { label: "US", value: "30" },
          { label: "China", value: "30" },
        ],
      },
    };
    this.state = {
      chartConfig,
      licenseConfig,
    };
  }

  render() {
    return (
      <View style={styles.chartContainer}>
        <ReactNativeFusionCharts
          chartConfig={this.state.chartConfig}
          licenseConfig={this.state.licenseConfig}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
  },

  chartContainer: {
    //  height: "80%",
    borderColor: "#000",
    borderWidth: 1,
  },
});
