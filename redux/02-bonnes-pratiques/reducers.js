import { combineReducers } from "redux";
import {
  COUNTER_INCREMENT,
  COUNTER_SET_STEP,
  USER_SET_NAME,
} from "./constants.js";

const initialState = {
  user: {
    name: "Romain",
  },
  counter: {
    count: 0,
    step: 1,
  },
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case USER_SET_NAME:
      return { ...state, name: action.payload };
  }
  return state;
}

function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      const newCount = state.count + state.step;
      return { ...state, count: newCount };
    case COUNTER_SET_STEP:
      return { ...state, step: action.payload };
  }
  return state;
}

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case COUNTER_INCREMENT:
//       const newCount = state.counter.count + state.counter.step;
//       return { ...state, counter: { ...state.counter, count: newCount } };
//     case COUNTER_SET_STEP:
//       return { ...state, counter: { ...state.counter, step: action.payload } };
//     case USER_SET_NAME:
//       return { ...state, user: { ...state.user, name: action.payload } };
//   }
//   return state;
// }

const reducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

export default reducer;
