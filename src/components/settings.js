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

class Settings extends Component {
  saveSettings = () => {
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
          <Text>Settings...</Text>
        </View>
      </View>
    );
  }
}

Settings.propTypes = {
  drawer: PropTypes.object.isRequired
};

export default connect(null, null)(Settings);
