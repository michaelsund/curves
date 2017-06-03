import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
  DatePickerAndroid,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  const dispatchedProps = {
    onNewWeight: weightMeasurement => dispatch(
      actions.newWeight(weightMeasurement)
    ),
    onNewArms: armsMeasurement => dispatch(
      actions.newArms(armsMeasurement)
    ),
    onNewGut: gutMeasurement => dispatch(
      actions.newGut(gutMeasurement)
    ),
    onNewHips: hipsMeasurement => dispatch(
      actions.newHips(hipsMeasurement)
    ),
    onNewWaist: waistMeasurement => dispatch(
      actions.newWaist(waistMeasurement)
    ),
    onNewButtocks: buttocksMeasurement => dispatch(
      actions.newButtocks(buttocksMeasurement)
    ),
    onNewThighs: thighsMeasurement => dispatch(
      actions.newThighs(thighsMeasurement)
    )
  };
  return dispatchedProps;
};

const styles = StyleSheet.create({
  container: {
  },
  toolbar: {
    backgroundColor: '#333333',
    height: 56,
  },
  dateText: {
    fontSize: 20,
    width: 200,
    fontWeight: 'bold'
  }
});

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString(),
      weight: 0,
      arms: 0,
      gut: 0,
      waist: 0,
      thighs: 0,
      hips: 0,
      buttocks: 0
    };
  }

  submitData = () => {
    if (this.state.weight > 0 && this.state.weight !== null && this.state.weight !== '') {
      this.props.onNewWeight({ value: parseFloat(this.state.weight), date: this.state.date });
    }
    if (this.state.arms > 0 && this.state.arms !== null && this.state.arms !== '') {
      this.props.onNewArms({ value: parseFloat(this.state.arms), date: this.state.date });
    }
    if (this.state.gut > 0 && this.state.gut !== null && this.state.gut !== '') {
      this.props.onNewGut({ value: parseFloat(this.state.gut), date: this.state.date });
    }
    if (this.state.waist > 0 && this.state.waist !== null && this.state.waist !== '') {
      this.props.onNewWaist({ value: parseFloat(this.state.waist), date: this.state.date });
    }
    if (this.state.thighs > 0 && this.state.thighs !== null && this.state.thighs !== '') {
      this.props.onNewThighs({ value: parseFloat(this.state.thighs), date: this.state.date });
    }
    if (this.state.hips > 0 && this.state.hips !== null && this.state.hips !== '') {
      this.props.onNewHips({ value: parseFloat(this.state.hips), date: this.state.date });
    }
    if (this.state.buttocks > 0 && this.state.buttocks !== null && this.state.buttocks !== '') {
      this.props.onNewButtocks({ value: parseFloat(this.state.buttocks), date: this.state.date });
    }
    this.props.navigator.resetTo({ name: 'Home' });
  }

  showPicker = async (stateKey, options) => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        // Closed datepicker
      } else {
        const newDate = new Date(year, month, day).toLocaleDateString();
        this.setState({ date: newDate });
      }
    } catch ({ code, message }) {
      // TODO error handling
    }
  };

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
          <TextInput
            multiline={false}
            onChangeText={weight => this.setState({ weight })}
            keyboardType="numeric"
            placeholder="Weight"
          />
          <TextInput
            multiline={false}
            onChangeText={arms => this.setState({ arms })}
            keyboardType="numeric"
            placeholder="Arms"
          />
          <TextInput
            multiline={false}
            onChangeText={gut => this.setState({ gut })}
            keyboardType="numeric"
            placeholder="Gut"
          />
          <TextInput
            multiline={false}
            onChangeText={waist => this.setState({ waist })}
            keyboardType="numeric"
            placeholder="Waist"
          />
          <TextInput
            multiline={false}
            onChangeText={hips => this.setState({ hips })}
            keyboardType="numeric"
            placeholder="Hips"
          />
          <TextInput
            multiline={false}
            onChangeText={buttocks => this.setState({ buttocks })}
            keyboardType="numeric"
            placeholder="Buttocks"
          />
          <TextInput
            multiline={false}
            onChangeText={thighs => this.setState({ thighs })}
            keyboardType="numeric"
            placeholder="Thighs"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableHighlight
              style={{ margin: 5 }}
              underlayColor={'#FFFFFF'}
              onPress={() => { this.showPicker(); }}
            >
              <Text style={styles.dateText}>
                {this.state.date}
              </Text>
            </TouchableHighlight>
            <Button
              onPress={() => { this.submitData(); }}
              title="Submit"
            />
          </View>
        </View>
      </View>
    );
  }
}

Add.propTypes = {
  navigator: React.PropTypes.object,
  drawer: React.PropTypes.object,
  onNewWeight: React.PropTypes.func,
  onNewArms: React.PropTypes.func,
  onNewGut: React.PropTypes.func,
  onNewWaist: React.PropTypes.func,
  onNewThighs: React.PropTypes.func,
  onNewHips: React.PropTypes.func,
  onNewButtocks: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Add);
