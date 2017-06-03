import {
  AsyncStorage
} from 'react-native';
import {
  NEW_ARMS,
  DEL_ARMS,
  SET_ARMS
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:arms', JSON.stringify(data));
};

let newArmsList = null;

const arms = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARMS':
      return Object.assign([], state, action.armsMeasurements);
    case 'DEL_ARMS':
      newArmsList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newArmsList);
      return newArmsList;
    case 'NEW_ARMS':
      newArmsList = Object.assign([], state, [
        ...state,
        action.armsMeasurement
      ]);
      updateStorage(newArmsList);
      return newArmsList;
    default:
      return state;
  }
};

export default arms;
