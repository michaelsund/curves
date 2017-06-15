import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chart from './chart';

const styles = StyleSheet.create({
  barRow: {
    flex: 1
  },
  selected: {
    flex: 1,
    fontSize: 20,
    margin: 12,
    textAlign: 'center'
  },
  date: {
    flex: 1,
    fontSize: 14,
    margin: 18,
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
    margin: 18,
    textAlign: 'center'
  },
  empty: {
    fontSize: 14,
    marginTop: 34,
    marginLeft: 20,
    textAlign: 'center'
  },
  Icon: {
    fontSize: 18,
    marginTop: 18,
    textAlign: 'center'
  }
});

export default class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      date: '',
      high: 0,
      diff: 0,
      data: []
    };
  }

  componentWillMount = () => {
    // Set local state data to recieved data
    this.setState({ data: this.props.data });

    // Find latest value entered
    if (this.props.data.length > 0) {
      const last = this.props.data[this.props.data.length - 1];
      this.setState({ selected: last.value, date: last.date });
    }

    // Calculate diff for icon to show
    const arrLength = this.props.data.length;
    if (arrLength >= 2) {
      this.setState({
        diff: (
          this.props.data[arrLength - 1].value - this.props.data[arrLength - 2].value
        ).toFixed(1)
      });
    }
  }

  gotoViewCategory = (data, title, unit) => {
    this.props.navigator.push({
      name: 'ViewCategory',
      passProps: { data, title, unit }
    });
  }

  render() {
    if (this.state.data.length > 5) {
      this.state.data = this.props.data.slice(Math.max(this.props.data.length - 5, 1));
    }
    return (
      <View>
        <View style={styles.barRow}>
          {this.props.data.length > 0 ? (
            <Chart
              data={this.state.data}
              color={this.props.color}
            />
          ) : (
            null
          )}
        </View>
        <TouchableHighlight
          underlayColor={'#FFFFFF'}
          onPress={() => {
            this.gotoViewCategory(this.props.data, this.props.title, this.props.unit);
          }}
        >
          <View style={{ backgroundColor: `rgba(${this.props.color.slice(4, -1)}, 0.2)`, flexDirection: 'row' }}>
            <Text style={styles.title}>{this.props.goal} {this.props.title}</Text>
            <Text style={styles.title}>{this.state.diff}</Text>
            { this.state.diff > 0 ? (
              <Icon
                style={styles.Icon}
                name="arrow-upward"
              />
            ) : (
              null
            )}
            { this.state.diff < 0 ? (
              <Icon
                style={styles.Icon}
                name="arrow-downward"
              />
            ) : (
              null
            )}
            { this.state.diff === 0 ? (
              <Icon
                style={styles.Icon}
                name="arrow-forward"
              />
            ) : (
              null
            )}
            <Text style={styles.selected}>{this.state.selected} {this.props.unit}</Text>
            <Text style={styles.date}>{this.state.date}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

InfoBox.propTypes = {
  navigator: PropTypes.object,
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  goal: PropTypes.number
};
