import {
  counterIncrement,
  counterSetStep,
  todoAdd,
  todoSetNewTodo,
  userFetchById,
  userFetchByIdSuccess,
  userFetchUsers,
  userFetchUsersSuccess,
  userSetName,
} from "./actions.js";
import { createReducer, isAnyOf, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Romain",
    items: [],
    loading: false,
    currentUser: {}
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

export const userReducer = createReducer(initialState.user, (builder) => {
  builder
    .addCase(userSetName, (state, action) => {
      state.name = action.payload;
    })
    // .addCase(isAnyOf(userFetchUsers, userFetchById), (state, action) => {
    //   state.loading = true;
    // })
    .addCase(userFetchUsers, (state, action) => {
      state.loading = true;
    })
    .addCase(userFetchUsersSuccess, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(userFetchByIdSuccess, (state, action) => {
      state.currentUser = action.payload;
    });
});

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
