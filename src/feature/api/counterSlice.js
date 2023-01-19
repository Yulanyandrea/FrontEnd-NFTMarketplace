import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  GetData,
  GetDataUser,
  LoginUser,
  UpdateUser,
} from './counterApi';

const initialState = {
  data: [],
  dataUser: [],
  shoppingCart: [],
  // eslint-disable-next-line no-use-before-define
  user: createInitialState(),
  status: 'idle',
  currentSelect: null,
  currentUserSelect: null,
  total: 0,
};

function createInitialState() {
  const user = localStorage.getItem('user');

  if (user === 'undefined') {
    return null;
  }
  return {
    profile: JSON.parse(user),
    error: null,
  };
}

export const fetchData = createAsyncThunk('data/fetch', async (data) => {
  const response = await GetData(data);
  return response;
});

export const fetchUsers = createAsyncThunk('users/fetch', async (data) => {
  const response = await GetDataUser(data);
  return response;
});

export const loginUser = createAsyncThunk('user/post', async (data) => {
  const response = await LoginUser(data);
  return response;
});

export const updateUser = createAsyncThunk('user/patch', async (data) => {
  const response = await UpdateUser(data);
  return response;
});

export const counterSlice = createSlice({
  name: 'nftStore',
  initialState,
  reducers: {
    setCurrentData: (state, action) => {
      return {
        ...state,
        currentSelect: action.payload,
      };
    },
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUserSelect: action.payload,
      };
    },
<<<<<<< HEAD
    addCart: (state, action) => {
      return {
        ...state,
        shoppingCart: state.shoppingCart.push(action.payload),
      };
=======
    addToCart: (state, action) => {
      state.shoppingCart.push({ ...action.payload });
      state.total += action.payload.price;
>>>>>>> 6750475d4067459270d236e29ab23262a77933e8
    },
  },
  extraReducers: (builder) => {
    builder
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
      })
      .addCase(loginUser.rejected, (state) => { // -> check
        state.status = 'reject';
      })
      // update:
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'finish';
        const user = action.payload;
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = 'reject';
      });
  },
});

export const {
  setCurrentData, setCurrentUser, addToCart, authentication,
} = counterSlice.actions;

export default counterSlice.reducer;
