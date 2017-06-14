import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';
import RNChart from 'react-native-chart';

const barWidth = 30;

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  barWrapper: {
    position: 'relative'
  },
  chart: {
    width: 200,
    height: 100
  }
});

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default class Chart extends Component {
  render() {
    return (
      <RNChart
        style={styles.chart}
        data={data}
        verticalGridStep={5}
        type="line"
      />
    );
  }
}

Chart.propTypes = {
  value: React.PropTypes.number,
  high: React.PropTypes.number,
  low: React.PropTypes.number,
  color: React.PropTypes.string,
  unitHeight: React.PropTypes.number,
  date: React.PropTypes.string,
  barInterval: React.PropTypes.number,
  childUpdatesParent: React.PropTypes.func
};
