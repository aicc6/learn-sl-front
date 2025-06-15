import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (_builder) => {},
  selectors: {
    getTodos: (state) => state,
  },
})

export const todoReducer = slice.reducer

export const { getTodos } = slice.selectors
