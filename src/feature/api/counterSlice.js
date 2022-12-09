import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  state: 'idle',
};

export const counterSlice = createSlice({
  name: 'nftStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default counterSlice.reducer;
