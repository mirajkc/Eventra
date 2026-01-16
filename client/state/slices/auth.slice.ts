import getAccessToken from '@/lib/access.token';
import { IUserDetails } from '@/types/user.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  userDetails: IUserDetails | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userDetails: null,
  loading: false,
  error: null,
};

export const getUserDetails = createAsyncThunk(
  'userdetails/getUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const token = await getAccessToken();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/me`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        return rejectWithValue("Failed to fetch user details");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'userdetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload.data;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
