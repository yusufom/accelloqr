import { configureStore } from '@reduxjs/toolkit';
import authReducer from './actions/authSlice';
import { authApi } from './actions/authService';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, }).concat(authApi.middleware),
});

export default store;