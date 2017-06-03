import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  const dispatchedProps = {
    onDelWeight: index => dispatch(
      actions.delWeight(index)
    ),
    onDelArms: index => dispatch(
      actions.delArms(index)
    ),
    onDelGut: index => dispatch(
      actions.delGut(index)
    ),
    onDelWaist: index => dispatch(
      actions.delWaist(index)
    ),
    onDelHips: index => dispatch(
      actions.delHips(index)
    ),
    onDelButtocks: index => dispatch(
      actions.delButtocks(index)
    ),
    onDelThighs: index => dispatch(
      actions.delThighs(index)
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
  valueText: {
    flex: 1,
    fontSize: 14,
    marginTop: 4
  },
  title: {
    alignSelf: 'center',
    fontSize: 20
  },
  delBtn: {
    flex: 1
  },
  removeIcon: {
    fontSize: 30,
    alignSelf: 'flex-end',
    marginRight: 5
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 3,
    marginTop: 24,
    marginBottom: 20
  }
});

class ViewCategory extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.data)
    };
  }

  componentDidMount = () => {
    console.log(`ViewCategory got : ${JSON.stringify(this.props.data)}`);
  }

  deleteRecord = (index) => {
    switch (this.props.title.toLowerCase()) {
      case 'weight':
        this.props.onDelWeight(index);
        break;
      case 'arms':
        this.props.onDelArms(index);
        break;
      case 'gut':
        this.props.onDelGut(index);
        break;
      case 'waist':
        this.props.onDelWaist(index);
        break;
      case 'hips':
        this.props.onDelHips(index);
        break;
      case 'buttocks':
        this.props.onDelButtocks(index);
        break;
      case 'thighs':
        this.props.onDelThighs(index);
        break;
      default:
        break;
    }
    this.props.data.splice(index, 1);
    this.setState({
      dataSource: this.ds.cloneWithRows(this.props.data),
    });
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
          <Text style={styles.title}>{this.props.title}</Text>
          { this.props.data.length === 0 ? (
            <Text>No data to display..</Text>
          ) : (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData, sectionID, rowID) =>
                <View style={styles.rowContainer}>
                  <Text style={styles.valueText}>
                    {rowData.value} {this.props.unit} submitted on {rowData.date}
                  </Text>
                  <Icon
                    style={styles.removeIcon}
                    name="delete"
                    onPress={() => { this.deleteRecord(rowID); }}
                  />
                </View>
              }
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          )}
        </View>
      </View>
    );
  }
}

ViewCategory.propTypes = {
  drawer: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  unit: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  onDelWeight: React.PropTypes.func,
  onDelArms: React.PropTypes.func,
  onDelGut: React.PropTypes.func,
  onDelWaist: React.PropTypes.func,
  onDelHips: React.PropTypes.func,
  onDelButtocks: React.PropTypes.func,
  onDelThighs: React.PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ViewCategory);
