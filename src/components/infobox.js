import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  ScrollView
} from 'react-native';
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

  randomEmpty = () => {
    const quotes = [
      'Such empty',
      'Nothing, nada, zip',
      'Anyone here?',
      'More data!',
      'Gimmie something'
    ];
    const picked = Math.round(Math.random() * (quotes.length - 1));
    return quotes[picked];
  }

  gotoViewCategory = (data, title, unit) => {
    this.props.navigator.push({
      name: 'ViewCategory',
      passProps: { data, title, unit }
    });
  }

  render() {
    const scrollHeight = 10;
    return (
      <View>
        <View style={styles.barRow}>
          {this.props.data.length > 0 ? (
            <Chart data={this.props.data} color={this.props.color} title={this.props.title} />
          ) : (
            <Text style={styles.empty}>{this.randomEmpty()}</Text>
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
  navigator: React.PropTypes.object,
  data: React.PropTypes.array,
  title: React.PropTypes.string.isRequired,
  unit: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  goal: React.PropTypes.number
};
