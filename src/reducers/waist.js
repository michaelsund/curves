import {
  AsyncStorage
} from 'react-native';
import {
  NEW_WAIST,
  DEL_WAIST,
  SET_WAIST
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:waist', JSON.stringify(data));
};

let newWaistList = null;

const weights = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WAIST':
      return Object.assign([], state, action.waistMeasurements);
    case 'DEL_WAIST':
      newWaistList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newWaistList);
      return newWaistList;
    case 'NEW_WAIST':
      newWaistList = Object.assign([], state, [
        ...state,
        action.waistMeasurement
      ]);
      updateStorage(newWaistList);
      return newWaistList;
    default:
      return state;
  }
};

export default weights;
