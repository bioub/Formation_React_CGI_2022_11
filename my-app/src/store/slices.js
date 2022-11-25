import { createSlice, nanoid } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  initialState: initialState.user,
  name: 'user', // les actions vont être préfixées par user/
  reducers: {
    userSetName(state, action) {
      state.name = action.payload;
    }
  },
});


export const userReducer = userSlice.reducer;
export const { userSetName } = userSlice.actions;
