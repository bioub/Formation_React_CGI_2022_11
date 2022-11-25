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
