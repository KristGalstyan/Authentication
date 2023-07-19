import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: []
}

const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    pushToDo: (state, action) => {
      state.todo.push(action.payload)
    },
    deleteFromToDo: (state, action) => {
      state.todo.splice(action.payload, 1)
    }
  }
})

export const { actions, reducer } = todoList
