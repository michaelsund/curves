import {
  AsyncStorage
} from 'react-native';
import {
  NEW_GUT,
  DEL_GUT,
  SET_GUT
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:gut', JSON.stringify(data));
};

let newGutList = null;

const gut = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GUT':
      return Object.assign([], state, action.gutMeasurements);
    case 'DEL_GUT':
      newGutList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newGutList);
      return newGutList;
    case 'NEW_GUT':
      newGutList = Object.assign([], state, [
        ...state,
        action.gutMeasurement
      ]);
      updateStorage(newGutList);
      return newGutList;
    default:
      return state;
  }
};

export default gut;
