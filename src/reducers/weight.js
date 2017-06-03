import {
  AsyncStorage
} from 'react-native';
import {
  NEW_WEIGHT,
  DEL_WEIGHT,
  SET_WEIGHT
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:weight', JSON.stringify(data));
};

let newWeightList = null;

const weight = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEIGHT':
      return Object.assign([], state, action.weightMeasurements);
    case 'DEL_WEIGHT':
      newWeightList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newWeightList);
      return newWeightList;
    case 'NEW_WEIGHT':
      newWeightList = Object.assign([], state, [
        ...state,
        action.weightMeasurement
      ]);
      updateStorage(newWeightList);
      return newWeightList;
    default:
      return state;
  }
};

export default weight;
