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
    height: 100,
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
      diff: 0
    };
  }

  componentDidMount = () => {
    const max = this.findBiggest(this.props.data);
    this.setState({ high: max });
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

  childUpdatesParent = (value, date) => {
    this.setState({ selected: value, date });
  }

  findBiggest = (obj) => {
    let bigSeen = 0;
    for (const o of obj) {
      if (o.value > bigSeen) {
        bigSeen = o.value;
      }
    }
    return bigSeen;
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

  renderBars = (data, date, color) => {
    const bars = data.map((value, index) => {
      const chart = (
        <Chart
          goal={this.props.goal}
          key={index}
          value={value}
          high={this.state.high}
          low={0}
          color={color}
          unitHeight={1}
          date={date[index]}
          barInterval={1}
          childUpdatesParent={this.childUpdatesParent}
        />
      );
      return chart;
    });
    return bars;
  }

  render() {
    const scrollHeight = 10;
    return (
      <View>
        <View style={styles.barRow}>
          {/* TODO use Flatlist with scrollToEnd */}
          <ScrollView
            ref={(ref) => { this.SCROLLVIEW = ref; }}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            directionalLockEnabled
            style={[styles.scrollView, { height: scrollHeight }]}
          >
            {this.renderBars(
              this.props.data.map(d => d.value),
              this.props.data.map(d => d.date),
              this.props.color
            )}
            {this.props.data.length > 0 ? (
              null
            ) : (
              <Text style={styles.empty}>{this.randomEmpty()}</Text>
            )}
          </ScrollView>
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
