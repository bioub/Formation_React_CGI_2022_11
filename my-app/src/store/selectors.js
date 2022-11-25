export function countSelector(state) {
  return state.counter.count;
}

export function stepSelector(state) {
  return state.counter.step;
}

export function nameSelector(state) {
  return state.user.name;
}

export function todosSelector(state) {
  return state.todos;
}

export function userSelector(state) {
  return state.user;
}
