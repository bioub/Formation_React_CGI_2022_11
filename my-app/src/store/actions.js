import { createAction, nanoid } from '@reduxjs/toolkit'

export const userSetName = createAction("USER_SET_NAME");
export const counterIncrement = createAction("COUNTER_INCREMENT");
export const counterSetStep = createAction("COUNTER_SET_STEP");
export const todoAdd = createAction('@todos/addTodo', (title) => {
  return {
    payload: {
      id: nanoid(),
      title,
      completed: false,
    }
  }
});
export const todoSetNewTodo = createAction('@todos/setNewTodo');

export const userFetchUsers = createAction("USER_FETCH_USERS");
export const userFetchUsersSuccess = createAction("USER_FETCH_USERS_SUCCESS");

export const userFetchById = createAction("USER_FETCH_BY_ID");
export const userFetchByIdSuccess = createAction("USER_FETCH_BY_ID_SUCCESS");
