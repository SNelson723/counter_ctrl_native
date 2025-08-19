import { configureStore, type Middleware } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice';

const middlewares: Middleware[] = [];

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
