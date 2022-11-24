import { counterIncrement, counterSetStep } from "./actions.js";
import reducer from "./reducers.js";
import rtk from '@reduxjs/toolkit'

import Counter from "./Counter.js";
import Profile from "./Profile.js";
import UserForm from "./UserForm.js";

const store = rtk.configureStore({
  reducer: reducer,
});

Counter(store);
Counter(store);
Counter(store);

Profile(store);


UserForm(store);


store.dispatch(counterIncrement());
store.dispatch(counterIncrement());
store.dispatch(counterIncrement());
store.dispatch(counterSetStep(10));
store.dispatch(counterIncrement());
