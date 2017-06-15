import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  BackAndroid,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import version from '../../package.json';

const mapDispatchToProps = (dispatch) => {
  const dispatchedProps = {
    onSetWeight: weightMeasurements => dispatch(
      actions.setWeight(weightMeasurements)
    ),
    onSetArms: armMeasurements => dispatch(
      actions.setArms(armMeasurements)
    ),
    onSetGut: gutMeasurements => dispatch(
      actions.setGut(gutMeasurements)
    ),
    onSetHips: hipsMeasurements => dispatch(
      actions.setHips(hipsMeasurements)
    ),
    onSetButtocks: buttocksMeasurements => dispatch(
      actions.setButtocks(buttocksMeasurements)
    ),
    onSetWaist: waistMeasurements => dispatch(
      actions.setWaist(waistMeasurements)
    ),
    onSetThighs: thighsMeasurements => dispatch(
      actions.setThighs(thighsMeasurements)
    ),
  };
  return dispatchedProps;
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  versionText: {
    fontSize: 14,
    color: 'white'
  }
});

class Splash extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoading: true
  //   };
  // }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const currentRoutes = this.props.navigator.getCurrentRoutes();
      if (currentRoutes.length === 1) {
        if (currentRoutes[0].name === 'Home') {
          return false;
        }
      } else {
        this.props.navigator.pop();
      }
      return true;
    });
    AsyncStorage.getItem('@CurvesStore:weight').then((data) => {
      if (data) {
        this.props.onSetWeight(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:arms').then((data) => {
      if (data) {
        this.props.onSetArms(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:gut').then((data) => {
      if (data) {
        this.props.onSetGut(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:waist').then((data) => {
      if (data) {
        this.props.onSetWaist(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:thighs').then((data) => {
      if (data) {
        this.props.onSetThighs(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:hips').then((data) => {
      if (data) {
        this.props.onSetHips(JSON.parse(data));
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:buttocks').then((data) => {
      if (data) {
        this.props.onSetButtocks(JSON.parse(data));
      }
    })
    .done();
    setTimeout(() => {
      this.props.navigator.resetTo({ name: 'Home' });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.loader}>
        <Text style={styles.versionText}>Curves {version.version}</Text>
        <Image source={require('../media/curves-144x144-inverted.png')} />
        <ActivityIndicator
          animating
          size="large"
        />
      </View>
    );
  }
}

Splash.propTypes = {
  navigator: PropTypes.object,
  onSetWeight: PropTypes.func,
  onSetArms: PropTypes.func,
  onSetGut: PropTypes.func,
  onSetWaist: PropTypes.func,
  onSetThighs: PropTypes.func,
  onSetHips: PropTypes.func,
  onSetButtocks: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Splash);
