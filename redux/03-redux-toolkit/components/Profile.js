import { userSetName } from "../store/actions.js";
import { nameSelector } from "../store/selectors.js";

function Profile(store) {
  const initialState = store.getState();
  let _name = nameSelector(initialState);
  store.subscribe(() => {
    const state = store.getState();
    const name = nameSelector(state);

    if (name !== _name) {
      console.log('Profile new name', name);
      _name = name;
    }
  });

  setTimeout(() => {
    store.dispatch(userSetName('Titi'));
  }, 4000);
}

export default Profile;
