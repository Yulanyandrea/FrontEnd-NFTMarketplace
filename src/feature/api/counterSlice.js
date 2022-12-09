import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetData } from './counterApi';

const initialState = {
  data: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk('data/fetch', async (data) => {
  const response = GetData(data);
  return response;
});

export const counterSlice = createSlice({
  name: 'nftStore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'reject';
      });
  },
});

export default counterSlice.reducer;
