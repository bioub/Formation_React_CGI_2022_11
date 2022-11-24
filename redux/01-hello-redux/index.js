import redux from "redux";

const initialState = {
  user: {
    name: "Romain",
  },
  counter: {
    count: 0,
    step: 1,
  },
};

// le reducer doit être une fonction pure
// - prédictive, appelée avec des paramètres donnés elle a toujours le même retour
// ex prédictive : sum(1, 2) === 3
// ex non prédic : Math.random() === ????
// - elle ne modifie pas ses paramètres (ici surtout state)
// - elle ne fait pas de side-effect (appels externes, requete HTTP, requete Database, requete localStorage)
function reducer(state = initialState, action) {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      const newCount = state.counter.count + state.counter.step;
      return { ...state, counter: { ...state.counter, count: newCount } };
    case "COUNTER_SET_STEP":
      return { ...state, counter: { ...state.counter, step: action.step } };
    case "USER_SET_NAME":
      return { ...state, user: { ...state.user, name: action.name } };
  }

  return state;
}

/** @type {import('redux').Store} */
const store = redux.legacy_createStore(reducer);

// Pattern Observer
// document.addEventListener('click', () => {});
// document.dispatchEvent(new MouseEvent('click'));

store.subscribe(() => {
  const state = store.getState();
  const name = state.user.name;
  const count = state.counter.count;
  const step = state.counter.step;
  console.log("name", name, "count", count, "step", step);
});
store.dispatch({ type: "COUNTER_INCREMENT" });
store.dispatch({ type: "COUNTER_INCREMENT" });
store.dispatch({ type: "COUNTER_INCREMENT" });
store.dispatch({ type: "COUNTER_SET_STEP", step: 10 });
store.dispatch({ type: "COUNTER_INCREMENT" });
store.dispatch({ type: "USER_SET_NAME", name: "Toto" });
