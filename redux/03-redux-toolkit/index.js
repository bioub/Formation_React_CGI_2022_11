import { counterIncrement, counterSetStep } from "./store/actions.js";
import reducer from "./store/reducers.js";
import rtk from '@reduxjs/toolkit'

import Counter from "./components/Counter.js";
import Profile from "./components/Profile.js";
import UserForm from "./components/UserForm.js";

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
