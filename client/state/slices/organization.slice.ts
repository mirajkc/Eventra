import getAccessToken from "@/lib/access.token";
import { IOrganizationResponse } from "@/types/organization.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IOrganizationState {
  loading: boolean
  error: string | null
  organizationDetails: IOrganizationResponse | null

}
const initialState: IOrganizationState = {
  loading: false,
  error: null,
  organizationDetails: null,
}
export const getLoggedInUserOrganization = createAsyncThunk<
  IOrganizationResponse,
  void,
  { rejectValue: string }
>(
  "organization/getLoggedInUserOrganization",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await getAccessToken();
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/organization/get-loggedin-users-organization`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        return rejectWithValue(errorData.message || "Failed to fetch organization details");
      }

      const data = await response.json();
      return data as IOrganizationResponse;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Failed to fetch organization details");
    }
  }
);



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
