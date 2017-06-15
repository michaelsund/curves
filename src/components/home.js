import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  ScrollView,
  AsyncStorage,
  RefreshControl
} from 'react-native';
import PropTypes from 'prop-types';
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
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componenWillReceiveProps = () => {
    console.log(`CURRENT WEIGHT PROPS: ${JSON.stringify(this.props.weight)}`);
  }

  // refreshing() {
  //   this.setState({ refreshing: true });
  //   AsyncStorage.getItem('@CurvesStore:settings').then((data) => {
  //     if (data) {
  //       this.props.onSetSettings(JSON.parse(data), false);
  //     }
  //     this.setState({ refreshing: false });
  //   })
  //   .done();
  // }

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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => { this.refreshing(); }}
            />
          }
        >
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.weight}
            title="Weight"
            unit="kg"
            color="rgb(51, 153, 255)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.arms}
            title="Arms"
            unit="cm"
            color="rgb(0, 153, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.gut}
            title="Gut"
            unit="cm"
            color="rgb(255, 153, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.waist}
            title="Waist"
            unit="cm"
            color="rgb(204, 0, 204)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.hips}
            title="Hips"
            unit="cm"
            color="rgb(255, 204, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.buttocks}
            title="Buttocks"
            unit="cm"
            color="rgb(153, 102, 51)"
          />
          <InfoBox
            navigator={this.props.navigator}
            data={this.props.thighs}
            title="Thighs"
            unit="cm"
            color="rgb(255, 102, 102)"
          />
        </ScrollView>
      </View>
    );
  }
}

Home.propTypes = {
  drawer: PropTypes.object,
  navigator: PropTypes.object,
  weight: PropTypes.array.isRequired,
  arms: PropTypes.array.isRequired,
  gut: PropTypes.array.isRequired,
  waist: PropTypes.array.isRequired,
  thighs: PropTypes.array.isRequired,
  hips: PropTypes.array.isRequired,
  buttocks: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(Home);
