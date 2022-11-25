import { userSetName } from "../store/actions.js";
import { nameSelector } from "../store/selectors.js";

function UserForm(store) {
  const initialState = store.getState();
  let _name = nameSelector(initialState);
  store.subscribe(() => {
    const state = store.getState();
    const name = nameSelector(state);

    if (name !== _name) {
      console.log('UserForm new name', name);
      _name = name;
    }
  });

  setTimeout(() => {
    store.dispatch(userSetName('Toto'));
  }, 1000)
}

export default UserForm;
