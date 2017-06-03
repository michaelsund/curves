import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import * as actions from '../actions';

import InfoBox from './infobox';

const mapStateToProps = (state) => {
  const mappedProps = {
    weight: state.weight,
    arms: state.arms,
    gut: state.gut,
    waist: state.waist,
    thighs: state.thighs,
    hips: state.hips,
    buttocks: state.buttocks
  };
  return mappedProps;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#333333',
    height: 56,
  }
});

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Icon.ToolbarAndroid
          style={styles.toolbar}
          navIconName="menu"
          iconSize={26}
          title="Curves"
          subtitleColor="white"
          titleColor="white"
          onIconClicked={() => this.props.drawer.openDrawer()}
        />
        <ScrollView>
          <InfoBox navigator={this.props.navigator} data={this.props.weight} title="Weight" unit="kg" color="rgb(51, 153, 255)" />
          <InfoBox navigator={this.props.navigator} data={this.props.arms} title="Arms" unit="cm" color="rgb(0, 153, 0)" />
          <InfoBox navigator={this.props.navigator} data={this.props.gut} title="Gut" unit="cm" color="rgb(255, 153, 0)" />
          <InfoBox navigator={this.props.navigator} data={this.props.waist} title="Waist" unit="cm" color="rgb(204, 0, 204)" />
          <InfoBox navigator={this.props.navigator} data={this.props.hips} title="Hips" unit="cm" color="rgb(255, 204, 0)" />
          <InfoBox navigator={this.props.navigator} data={this.props.buttocks} title="Buttocks" unit="cm" color="rgb(153, 102, 51)" />
          <InfoBox navigator={this.props.navigator} data={this.props.thighs} title="Thighs" unit="cm" color="rgb(255, 102, 102)" />
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  drawer: React.PropTypes.object,
  navigator: React.PropTypes.object,
  weight: React.PropTypes.array.isRequired,
  arms: React.PropTypes.array.isRequired,
  gut: React.PropTypes.array.isRequired,
  waist: React.PropTypes.array.isRequired,
  thighs: React.PropTypes.array.isRequired,
  hips: React.PropTypes.array.isRequired,
  buttocks: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(Home);
