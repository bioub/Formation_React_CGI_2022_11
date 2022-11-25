import { counterIncrement, counterSetStep, userSetName } from "./actions.js";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Romain",
  },
  counter: {
    count: 0,
    step: 1,
  },
};

// function userReducer(state = initialState.user, action) {
//   switch (action.type) {
//     case userSetName.type:
//       return { ...state, name: action.payload };
//   }
//   return state;
// }

const userReducer = createReducer(initialState.user, (builder) => {
  builder.addCase(userSetName, (state, action) => {
    state.name = action.payload;
  });
});

const counterReducer = createReducer(initialState.counter, (builder) => {
  builder
    .addCase(counterIncrement, (state, action) => {
      state.count = state.count + state.step;
    })
    .addCase(counterSetStep, (state, action) => {
      state.step = action.payload;
    });
});

// function counterReducer(state = initialState.counter, action) {
//   switch (action.type) {
//     case counterIncrement.type:
//       const newCount = state.count + state.step;
//       return { ...state, count: newCount };
//     case counterSetStep.type:
//       return { ...state, step: action.payload };
//   }
//   return state;
// }

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

const reducer = {
  user: userReducer,
  counter: counterReducer,
};

export default reducer;
