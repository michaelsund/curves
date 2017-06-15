import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryLine
} from 'victory-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  barWrapper: {
    position: 'relative'
  }
});

export default class Chart extends Component {
  render() {
    const color = this.props.color;
    return (
      <ScrollView contentContainerStyle={styles.container} scrollEnabled>
        <VictoryChart
          padding={{ top: 10, bottom: 30, left: 30, right: 30 }}
          height={150}
          theme={VictoryTheme.material}
        >
          <VictoryLine
            interpolation="radial"
            style={{
              data: {
                stroke: color,
                strokeWidth: 2
              }
            }}
            data={this.props.data}
            x="date"
            y="value"
          />
        </VictoryChart>
      </ScrollView>
    );
  }
}

Chart.propTypes = {
  data: React.PropTypes.array,
  color: React.PropTypes.string
};
