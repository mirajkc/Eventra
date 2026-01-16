import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from './slices/auth.slice'

export const store = configureStore({
  reducer : {
    authSlice : AuthReducers
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

