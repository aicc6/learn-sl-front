import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = []

export const getTodosAction = createAsyncThunk('getTodosAction', async () => {
  return Promise.resolve(initialState)
})

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAction.pending, (_state, _action) => {})
      .addCase(getTodosAction.fulfilled, (_state, _action) => {})
      .addCase(getTodosAction.rejected, (_state, _action) => {})
  },
  selectors: {
    getTodos: (state) => state,
  },
})

export const todoReducer = slice.reducer

export const { getTodos } = slice.selectors
