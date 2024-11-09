// src/features/yourFeature/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData:{},
};

const UserSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state,actions) => {
        state.userData = actions.payload
    }
  },
});

export const { setUserData } = UserSlice.actions;
export default UserSlice.reducer;
