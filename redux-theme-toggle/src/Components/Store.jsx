import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Themeslice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;