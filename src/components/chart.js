import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryGroup,
  VictoryTooltip,
  VictoryScatter
} from 'victory-native';
import PropTypes from 'prop-types';

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

let last = 0;

export default class Chart extends Component {
  moreOrLess = (val) => {
    const res = val.value > last ? 'triangleUp' : 'triangleDown';
    last = val.value;
    return res;
  }

  render() {
    const color = this.props.color;
    const dates = this.props.data.map((d) => {
      const x = d.date.slice(0, -3);
      return x;
    });
    return (
      <ScrollView contentContainerStyle={styles.container} scrollEnabled>
        <VictoryGroup
          padding={{ top: 40, bottom: 30, left: 25, right: 25 }}
          data={this.props.data}
          x="date"
          y="value"
          height={150}
        >
          <VictoryLine
            interpolation="cardinal"
            style={{
              data: {
                stroke: color,
                strokeWidth: 3,
                opacity: 0.4
              }
            }}
          />
          <VictoryScatter
            symbol={val => this.moreOrLess(val)}
            labels={val => val.value}
            style={{
              data: {
                fontSize: 14,
                fill: color
              }
            }}
            size={6}
          />
          <VictoryAxis
            tickValues={dates}
            fixLabelOverlap
          />
        </VictoryGroup>
      </ScrollView>
    );
  }
}

Chart.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string
};
