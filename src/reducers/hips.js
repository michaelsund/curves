import {
  AsyncStorage
} from 'react-native';
import {
  NEW_HIPS,
  DEL_HIPS,
  SET_HIPS
} from '../actions';

const initialState = [];
const updateStorage = (data) => {
  AsyncStorage.setItem('@CurvesStore:hips', JSON.stringify(data));
};

let newHipsList = null;

const hips = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_HIPS':
      return Object.assign([], state, action.hipsMeasurements);
    case 'DEL_HIPS':
      newHipsList = [
        ...state.slice(0, parseInt(action.index, 10)),
        ...state.slice(parseInt(action.index, 10) + 1)
      ];
      updateStorage(newHipsList);
      return newHipsList;
    case 'NEW_HIPS':
      newHipsList = Object.assign([], state, [
        ...state,
        action.hipsMeasurement
      ]);
      updateStorage(newHipsList);
      return newHipsList;
    default:
      return state;
  }
};

export default hips;
