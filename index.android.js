import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Platform,
  ToolbarAndroid,
  AsyncStorage,
  TouchableHighlight,
  DrawerLayoutAndroid
} from 'react-native';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/components/home';
import Add from './src/components/add';
import ViewCategory from './src/components/viewcategory';
import Splash from './src/components/splash';
import Info from './src/components/info';
import configureStore from './src/store/configureStore';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuButtonTxt: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5
  },
  menuButton: {
    height: 70,
  },
  drawer: {
    backgroundColor: '#FFFFFF',
    flex: 10,
    flexDirection: 'column'
  },
  menuItems: {
    flex: 9,
    flexDirection: 'column',
    marginTop: 20
  },
  userInfo: {
    flex: 1
  },
  menuIcons: {
    fontSize: 30,
    marginLeft: 10
  },
  innerMenuButton: {
    flexDirection: 'row'
  }
});

export default class Curves extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.drawerView = this.drawerView.bind(this);
  }

  menuNavigation(route, navigator) {
    // Compare route to current route, and dont navigate if same
    const curRoutes = navigator.getCurrentRoutes();
    const stackSize = curRoutes.length;
    if (curRoutes[stackSize - 1].name !== route.name) {
      navigator.push(route);
    }
    this.DRAWER.closeDrawer();
  }

  drawerView() {
    return (
      <View style={styles.drawer}>
        <View style={styles.menuItems}>
          <TouchableHighlight
            underlayColor={'#FFFFFF'}
            style={styles.menuButton}
            onPress={() => { this.menuNavigation({ name: 'Home' }, this.NAV); }}
          >
            <View style={styles.innerMenuButton}>
              <Icon
                style={styles.menuIcons}
                name="show-chart"
              />
              <Text style={styles.menuButtonTxt}>
                Overview
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#FFFFFF'}
            style={styles.menuButton}
            onPress={() => { this.menuNavigation({ name: 'Add' }, this.NAV); }}
          >
            <View style={styles.innerMenuButton}>
              <Icon
                style={styles.menuIcons}
                name="add"
              />
              <Text style={styles.menuButtonTxt}>
                Add
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#FFFFFF'}
            style={styles.menuButton}
            onPress={() => { this.menuNavigation({ name: 'Info' }, this.NAV); }}
          >
            <View style={styles.innerMenuButton}>
              <Icon
                style={styles.menuIcons}
                name="perm-device-information"
              />
              <Text style={styles.menuButtonTxt}>
                Info
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  renderScene(route, navigator) {
    let rendering = null;
    switch (route.name) {
      case 'Home':
        rendering = <Home navigator={navigator} {...route.passProps} drawer={this.DRAWER} />;
        break;
      case 'ViewCategory':
        rendering = (
          <ViewCategory navigator={navigator} {...route.passProps} drawer={this.DRAWER} />
        );
        break;
      case 'Info':
        rendering = (
          <Info navigator={navigator} {...route.passProps} drawer={this.DRAWER} />
        );
        break;
      case 'Add':
        rendering = <Add navigator={navigator} {...route.passProps} drawer={this.DRAWER} />;
        break;
      case 'Splash':
        rendering = <Splash navigator={navigator} {...route.passProps} />;
        break;
      default:
        rendering = <Splash navigator={navigator} {...route.passProps} />;
    }
    return rendering;
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(ref) => { this.DRAWER = ref; }}
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.drawerView}
      >
        <Provider store={store}>
          <View style={styles.container}>
            <Navigator
              ref={(ref) => { this.NAV = ref; }}
              initialRoute={{ name: 'Splash' }}
              renderScene={this.renderScene}
              configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}
            />
          </View>
        </Provider>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('Curves', () => Curves);
