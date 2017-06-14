import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions
} from 'react-native';

const barWidth = 30;

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  barWrapper: {
    position: 'relative'
  },
  bar: {
    width: barWidth
  },
  empty: {
    opacity: 0.2
  }
});

export default class Chart extends Component {
  onPress(value, date) {
    this.props.childUpdatesParent(value, date);
  }

  render() {
    const { color, low, high, value, date, unitHeight, barInterval } = this.props;
    const entity = ((value / high) * 100);
    const empty = 100 - entity;


    const baseStyle = {
      backgroundColor: color,
      marginRight: barInterval
    };
    return (
      <TouchableHighlight
        onPress={() => { this.onPress(value, this.props.date); }}
        underlayColor="transparent"
      >
        <View style={styles.container}>
          <View style={styles.barWrapper}>
            <View
              style={[
                styles.bar,
                styles.empty,
                Object.assign({}, baseStyle, { height: (empty * unitHeight) })
              ]}
            />
            <View
              style={[
                styles.bar,
                Object.assign({}, baseStyle, { height: (entity * unitHeight) })
              ]}
            />
          </View>
        </View>
      </TouchableHighlight>
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
