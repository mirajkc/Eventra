import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from './slices/auth.slice'
import OrganizationReducers from './slices/organization.slice'
import SearchReducers from './slices/search.slice'

export const store = configureStore({
  reducer: {
    authSlice: AuthReducers,
    organization: OrganizationReducers,
    search : SearchReducers
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

