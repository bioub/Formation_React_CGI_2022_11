import { createAction } from '@reduxjs/toolkit'

// Convention : Flux Standard Action (FSA)
// clés type + payload + ...

// action creators (une fonction retourne l'action)
// function createAction(type) {
//   this.type = type;
//   return (payload) => {
//     return {
//       type,
//       payload,
//     }
//   };
// }

export const userSetName = createAction("USER_SET_NAME");
export const counterIncrement = createAction("COUNTER_INCREMENT");
export const counterSetStep = createAction("COUNTER_SET_STEP");

// console.log(userSetName.type); // "USER_SET_NAME"
