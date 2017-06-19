import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  AsyncStorage,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import * as actions from '../actions';
import version from '../../package.json';

const styles = StyleSheet.create({
  container: {
  },
  toolbar: {
    backgroundColor: '#333333',
    height: 56,
  },
  allText: {
    fontSize: 14
  }
});

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStorage: 0
    };
  }
  componentDidMount = () => {
    AsyncStorage.getItem('@CurvesStore:weight').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:arms').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:waist').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:gut').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:hips').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:buttocks').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
    AsyncStorage.getItem('@CurvesStore:thighs').then((data) => {
      if (data) {
        this.setState({ totalStorage: this.state.totalStorage + data.length });
      }
    })
    .done();
  }

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
        <View style={{ padding: 5 }}>
          <Text style={styles.allText}>Version {version.version}</Text>
          <Text style={styles.allText}>Total localstorage size: {this.state.totalStorage} Kb</Text>
        </View>
      </View>
    );
  }
}

Info.propTypes = {
  drawer: PropTypes.object.isRequired
};

export default connect(null, null)(Info);
