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
    buttocks: state.buttocks,
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

  componentDidMount = () => {
    AsyncStorage.getItem('@CurvesStore:settings').then((data) => {
      if (data) {
        this.props.onSetSettings(JSON.parse(data), false);
      }
    })
    .done();
  }

  refreshing() {
    this.setState({ refreshing: true });
    AsyncStorage.getItem('@CurvesStore:settings').then((data) => {
      if (data) {
        this.props.onSetSettings(JSON.parse(data), false);
      }
      this.setState({ refreshing: false });
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
            goal={this.props.settings.weightGoal}
            data={this.props.weight}
            title="Weight"
            unit="kg"
            color="rgb(51, 153, 255)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.armsGoal}
            data={this.props.arms}
            title="Arms"
            unit="cm"
            color="rgb(0, 153, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.gutGoal}
            data={this.props.gut}
            title="Gut"
            unit="cm"
            color="rgb(255, 153, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.waistGoal}
            data={this.props.waist}
            title="Waist"
            unit="cm"
            color="rgb(204, 0, 204)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.hipGoal}
            data={this.props.hips}
            title="Hips"
            unit="cm"
            color="rgb(255, 204, 0)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.buttocksGoal}
            data={this.props.buttocks}
            title="Buttocks"
            unit="cm"
            color="rgb(153, 102, 51)"
          />
          <InfoBox
            navigator={this.props.navigator}
            goal={this.props.settings.thighsGoal}
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
  drawer: React.PropTypes.object,
  navigator: React.PropTypes.object,
  weight: React.PropTypes.array.isRequired,
  arms: React.PropTypes.array.isRequired,
  gut: React.PropTypes.array.isRequired,
  waist: React.PropTypes.array.isRequired,
  thighs: React.PropTypes.array.isRequired,
  hips: React.PropTypes.array.isRequired,
  buttocks: React.PropTypes.array.isRequired,
  onSetSettings: React.PropTypes.func,
  settings: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
