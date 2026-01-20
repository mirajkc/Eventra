import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from './slices/auth.slice'
import OrganizationReducers from './slices/organization.slice'

export const store = configureStore({
  reducer: {
    authSlice: AuthReducers,
    organization: OrganizationReducers
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

