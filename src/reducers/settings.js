import {
  AsyncStorage
} from 'react-native';
import {
  SET_SETTINGS
} from '../actions';

const initialState = {};
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:settings', JSON.stringify(data));
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS':
      if (action.storageSave) {
        console.log('Settings provided, updating storage');
        updateStorage(action.settings);
      } else {
        console.log('Settings provided');
      }
      return action.settings;
    default:
      return state;
  }
};

export default settings;
