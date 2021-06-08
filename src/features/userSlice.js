import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  }
});

export const { login, logout } = userSlice.actions;

// Select from redux slice
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
