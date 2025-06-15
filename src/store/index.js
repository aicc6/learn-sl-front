import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './slices/todo-slice'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const store = configureStore({
  reducer: combineReducers({
    todos: todoReducer,
  }),
})

export const useAppStore = useStore.withTypes()

export const useAppDispatch = useDispatch.withTypes()

export const useAppSelector = useSelector.withTypes()
