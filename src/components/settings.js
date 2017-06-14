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

const mapStateToProps = (state) => {
  const mappedProps = {
    settings: state.settings
  };
  return mappedProps;
};

const mapDispatchToProps = (dispatch) => {
  const dispatchedProps = {
    onSetSettings: (settings, storageSave) => dispatch(
      actions.setSettings(settings, storageSave)
    )
  };
  return dispatchedProps;
};

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weightGoal: null,
      armsGoal: null
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem('@CurvesStore:settings').then((data) => {
      if (data) {
        this.props.onSetSettings(JSON.parse(data), false);
      }
    })
    .done();
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      weightGoal: JSON.stringify(nextProps.settings.weightGoal),
      armsGoal: JSON.stringify(nextProps.settings.armsGoal),
    });
  }

  saveSettings = () => {
    this.props.onSetSettings({
      weightGoal: parseFloat(this.state.weightGoal),
      armsGoal: parseFloat(this.state.armsGoal)
    },
    true);
    // Popup to confirm save
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
          <Text>WeightGoal</Text>
          <TextInput
            multiline={false}
            onChangeText={weightGoal => this.setState({ weightGoal })}
            keyboardType="numeric"
            placeholder={this.state.weightGoal}
          />
          <Text>ArmsGoal</Text>
          <TextInput
            multiline={false}
            onChangeText={armsGoal => this.setState({ armsGoal })}
            keyboardType="numeric"
            placeholder={this.state.armsGoal}
          />
          <Button
            onPress={() => { this.saveSettings(); }}
            title="Save"
          />
        </View>
      </View>
    );
  }
}

Settings.propTypes = {
  drawer: React.PropTypes.object.isRequired,
  onSetSettings: React.PropTypes.func.isRequired,
  settings: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
