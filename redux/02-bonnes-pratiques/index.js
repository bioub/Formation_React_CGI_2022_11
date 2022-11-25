import { counterIncrement, counterSetStep } from "./store/actions.js";
import { configureStore } from "./store/configureStore.js";
import Counter from "./components/Counter.js";
import Profile from "./components/Profile.js";
import UserForm from "./components/UserForm.js";

const store = configureStore();

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
