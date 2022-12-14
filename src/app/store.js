import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/api/counterSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    nftMarketPlace: counterReducer,
  },
});
