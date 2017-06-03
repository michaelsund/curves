import {
  AsyncStorage
} from 'react-native';
import {
  NEW_THIGHS,
  DEL_THIGHS,
  SET_THIGHS
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:thighs', JSON.stringify(data));
};

let newThighList = null;

const thighs = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THIGHS':
      return Object.assign([], state, action.thighsMeasurements);
    case 'DEL_THIGHS':
      newThighList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newThighList);
      return newThighList;
    case 'NEW_THIGHS':
      newThighList = Object.assign([], state, [
        ...state,
        action.thighsMeasurement
      ]);
      updateStorage(newThighList);
      return newThighList;
    default:
      return state;
  }
};

export default thighs;
