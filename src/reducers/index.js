import { combineReducers } from 'redux';
import weight from './weight';
import arms from './arms';
import gut from './gut';
import waist from './waist';
import thighs from './thighs';
import hips from './hips';
import buttocks from './buttocks';
import settings from './settings';

export default combineReducers({
  weight,
  arms,
  gut,
  waist,
  thighs,
  hips,
  buttocks,
  settings
});
