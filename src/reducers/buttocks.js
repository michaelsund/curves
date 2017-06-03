import {
  AsyncStorage
} from 'react-native';
import {
  NEW_BUTTOCKS,
  DEL_BUTTOCKS,
  SET_BUTTOCKS
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:buttocks', JSON.stringify(data));
};

let newButtocksList = null;

const buttocks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BUTTOCKS':
      return Object.assign([], state, action.buttocksMeasurements);
    case 'DEL_BUTTOCKS':
      newButtocksList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newButtocksList);
      return newButtocksList;
    case 'NEW_BUTTOCKS':
      newButtocksList = Object.assign([], state, [
        ...state,
        action.buttocksMeasurement
      ]);
      updateStorage(newButtocksList);
      return newButtocksList;
    default:
      return state;
  }
};

export default buttocks;
