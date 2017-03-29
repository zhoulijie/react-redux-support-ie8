import * as types from './const'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}


