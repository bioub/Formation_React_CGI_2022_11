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


export function userByIdSelector(id) {
  return function (state) {
    return state.user.items.find((item) => item.id === Number(id));
  }
}

export function currentUserSelector(state) {
  return state.user.currentUser;
}
