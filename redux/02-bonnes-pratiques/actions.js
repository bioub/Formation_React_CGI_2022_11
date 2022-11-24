import { COUNTER_INCREMENT, COUNTER_SET_STEP, USER_SET_NAME } from "./constants.js";

// Convention : Flux Standard Action (FSA)
// clés type + payload + ...

// action creators (une fonction retourne l'action)
export function userSetName(name) {
  return {
    type: USER_SET_NAME,
    payload: name,
  };
}

export function counterIncrement() {
  return {
    type: COUNTER_INCREMENT,
  };
}

export function counterSetStep(step) {
  return {
    type: COUNTER_SET_STEP,
    payload: step,
  };
}
