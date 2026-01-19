import getAccessToken from "@/lib/access.token";
import { IOrganizationResponse } from "@/types/organization.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLoggedInUserOrganization = createAsyncThunk(
  "organization/getLoggedInUserOrganization",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessToken()
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-loggedin-users-organization`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
      })
      if (!response.ok) {
        return rejectWithValue(response)
      }
      return await response.json() as IOrganizationResponse
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

interface IOrganizationState {
  loading: boolean
  error: string | null
  organizationDetails: IOrganizationResponse | null
}

const initialState: IOrganizationState = {
  loading: false,
  error: null,
  organizationDetails: null
}

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoggedInUserOrganization.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getLoggedInUserOrganization.fulfilled, (state, action) => {
      state.loading = false
      state.organizationDetails = action.payload
    })
    builder.addCase(getLoggedInUserOrganization.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  }

})

export default organizationSlice.reducer