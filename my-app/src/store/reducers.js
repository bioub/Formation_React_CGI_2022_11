import {
  counterIncrement,
  counterSetStep,
  todoAdd,
  todoSetNewTodo,
  userSetName,
} from "./actions.js";
import { createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Romain",
  },
  counter: {
    count: 0,
    step: 1,
  },
  todos: {
    items: [
      { id: nanoid(), title: "ABC", completed: false },
      { id: nanoid(), title: "DEF", completed: true },
    ],
    newTodo: "XYZ",
  },
};

// const userReducer = createReducer(initialState.user, (builder) => {
//   builder.addCase(userSetName, (state, action) => {
//     state.name = action.payload;
//   });
// });

export const counterReducer = createReducer(initialState.counter, (builder) => {
  builder
    .addCase(counterIncrement, (state, action) => {
      state.count = state.count + state.step;
    })
    .addCase(counterSetStep, (state, action) => {
      state.step = action.payload;
    });
});

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(todoAdd, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(todoSetNewTodo, (state, action) => {
      state.newTodo = action.payload;
    });
});

// const reducer = {
//   // user: userReducer,
//   counter: counterReducer,
//   todos: todosReducer,
// };

// export default reducer;
