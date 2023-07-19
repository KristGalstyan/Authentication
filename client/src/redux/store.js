import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as AuthReducer } from './slices/auth.slice'
import { reducer as TodoReducer } from './slices/todo.slice'

const rootReducer = combineReducers({
  sign: AuthReducer,
  todo: TodoReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
