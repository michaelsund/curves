export const NEW_WEIGHT = 'NEW_WEIGHT';
export const NEW_ARMS = 'NEW_ARMS';
export const NEW_GUT = 'NEW_GUT';
export const NEW_WAIST = 'NEW_WAIST';
export const NEW_THIGHS = 'NEW_THIGHS';
export const NEW_HIPS = 'NEW_HIPS';
export const NEW_BUTTOCKS = 'NEW_BUTTOCKS';

export const DEL_WEIGHT = 'DEL_WEIGHT';
export const DEL_ARMS = 'DEL_ARMS';
export const DEL_GUT = 'DEL_GUT';
export const DEL_WAIST = 'DEL_WAIST';
export const DEL_THIGHS = 'DEL_THIGHS';
export const DEL_HIPS = 'DEL_HIPS';
export const DEL_BUTTOCKS = 'DEL_BUTTOCKS';

export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_ARMS = 'SET_ARMS';
export const SET_GUT = 'SET_GUT';
export const SET_WAIST = 'SET_WAIST';
export const SET_THIGHS = 'SET_THIGHS';
export const SET_HIPS = 'SET_HIPS';
export const SET_BUTTOCKS = 'SET_BUTTOCKS';

export const SET_SETTINGS = 'SET_SETTINGS';

export function setSettings(settings, storageSave) {
  return {
    type: SET_SETTINGS,
    settings,
    storageSave
  };
}

export function newWeight(weightMeasurement) {
  return {
    type: NEW_WEIGHT,
    weightMeasurement
  };
}

export function delWeight(index) {
  return {
    type: DEL_WEIGHT,
    index
  };
}

export function setWeight(weightMeasurements) {
  return {
    type: SET_WEIGHT,
    weightMeasurements
  };
}

export function newArms(armsMeasurement) {
  return {
    type: NEW_ARMS,
    armsMeasurement
  };
}

export function delArms(index) {
  return {
    type: DEL_ARMS,
    index
  };
}

export function setArms(armsMeasurements) {
  return {
    type: SET_ARMS,
    armsMeasurements
  };
}

export function newGut(gutMeasurement) {
  return {
    type: NEW_GUT,
    gutMeasurement
  };
}

export function delGut(index) {
  return {
    type: DEL_GUT,
    index
  };
}

export function setGut(gutMeasurements) {
  return {
    type: SET_GUT,
    gutMeasurements
  };
}

export function newWaist(waistMeasurement) {
  return {
    type: NEW_WAIST,
    waistMeasurement
  };
}

export function delWaist(index) {
  return {
    type: DEL_WAIST,
    index
  };
}

export function setWaist(waistMeasurements) {
  return {
    type: SET_WAIST,
    waistMeasurements
  };
}

export function newThighs(thighsMeasurement) {
  return {
    type: NEW_THIGHS,
    thighsMeasurement
  };
}

export function delThighs(index) {
  return {
    type: DEL_THIGHS,
    index
  };
}

export function setThighs(thighsMeasurements) {
  return {
    type: SET_THIGHS,
    thighsMeasurements
  };
}

export function newHips(hipsMeasurement) {
  return {
    type: NEW_HIPS,
    hipsMeasurement
  };
}

export function delHips(index) {
  return {
    type: DEL_HIPS,
    index
  };
}

export function setHips(hipsMeasurements) {
  return {
    type: SET_HIPS,
    hipsMeasurements
  };
}


export function newButtocks(buttocksMeasurement) {
  return {
    type: NEW_BUTTOCKS,
    buttocksMeasurement
  };
}

export function delButtocks(index) {
  return {
    type: DEL_BUTTOCKS,
    index
  };
}

export function setButtocks(buttocksMeasurements) {
  return {
    type: SET_BUTTOCKS,
    buttocksMeasurements
  };
}
