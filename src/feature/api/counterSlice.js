import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetData, GetDataUser, LoginUser } from './counterApi';

const initialState = {
  data: [],
  dataUser: [],
  // eslint-disable-next-line no-use-before-define
  user: createInitialState(),
  status: 'idle',
  currentSelect: null,
};

function createInitialState() {
  const user = localStorage.getItem('user');

  if (user === undefined) {
    return null;
  }
  return {
    profile: JSON.parse(user),
    error: null,
  };
}

export const fetchData = createAsyncThunk('data/fetch', async (data) => {
  const response = GetData(data);
  return response;
});

export const fetchUsers = createAsyncThunk('users/fetch', async (data) => {
  const response = GetDataUser(data);
  return response;
});

export const loginUser = createAsyncThunk('user/post', async (data) => {
  const response = LoginUser(data);
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
      /* eslint-disable no-param-reassign */
      // data:
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'reject';
      })
      // users:
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.dataUser = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'reject';
      })
      // login:
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'finish';
        const user = action.payload;
        localStorage.setItem('user', JSON.stringify(user.profile));
        state.user = user;
      });
  },
});

export const { setCurrentData } = counterSlice.actions;

export default counterSlice.reducer;
