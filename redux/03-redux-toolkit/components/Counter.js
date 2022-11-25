import { countSelector, stepSelector } from "../store/selectors.js";

function Counter(store) {
  const initialState = store.getState();

  let _count = countSelector(initialState);
  let _step = stepSelector(initialState)
  store.subscribe(() => {
    const state = store.getState();
    const count = countSelector(state);
    const step = stepSelector(state);

    if (count !== _count) {
      console.log('Counter new count', count);
      _count = count;
    }
    if (step !== _step) {
      console.log('Counter new step', step);
      _step = step;
    }
  });
}

export default Counter;
