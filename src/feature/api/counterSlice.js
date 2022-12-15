import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetData } from './counterApi';

const initialState = {
  data: [],
  status: 'idle',
  currentSelect: null,
};

export const fetchData = createAsyncThunk('data/fetch', async (data) => {
  const response = GetData(data);
  return response;
});

export const counterSlice = createSlice({
  name: 'nftStore',
  initialState,
  reducers: {
    setCurrentData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentSelect = action.payload;
    },
  },
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

export const { setCurrentData } = counterSlice.actions;

export default counterSlice.reducer;
