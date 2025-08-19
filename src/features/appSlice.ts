import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  url: string;
  awsUrl: string;
  key: string;
  awsKey: string;
  awsStats: string;
  awsStatsKey: string;
  loggedIn: boolean;
  token: string;
  activeMenuItem: string;
  notification: string;
  isLoading: boolean;
  autoReload: boolean;
  showForgotPassword: boolean;
  scope: number;
  lastRoute: string;
  basketUrl: string;
  basketyKey: string;
  showPasswordChangeNeeded: boolean;
  chatUrl: string;
}

export const initialState: AppState = {
  url: 'https://www.datacashreg.com/rReportsApi/api/',
  // url: "http://localhost:51603/api/",
  awsUrl: 'https://gbz4j6265j.execute-api.us-east-2.amazonaws.com/Prod/api/',
  key: '8080808080808080',
  awsKey: '7801882436271592',
  awsStats: 'https://v5o2brn6il.execute-api.us-east-2.amazonaws.com/Prod/api/',
  awsStatsKey: '7801882436271592',
  basketUrl: 'https://www.dmsonline.info/basketapi/api/',
  basketyKey: '1627309573649176',
  loggedIn: false,
  token: '',
  activeMenuItem: '',
  notification: '',
  isLoading: false,
  autoReload: true,
  showForgotPassword: false,
  scope: 0,
  lastRoute: '',
  showPasswordChangeNeeded: false,
  chatUrl: 'http://12.96.144.112/',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
    setNotification: (state, action: PayloadAction<string>) => {
      state.notification = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setForgotPassword: (state, action: PayloadAction<boolean>) => {
      state.showForgotPassword = action.payload;
    },
    setScope: (state, action: PayloadAction<number>) => {
      state.scope = action.payload;
    },
    setLastRoute: (state, action: PayloadAction<string>) => {
      state.lastRoute = action.payload;
    },
    logout: state => {
      state.loggedIn = false;
      state.token = '';
      state.activeMenuItem = '';
    },
    setPasswordChangeNeeded: (state, action: PayloadAction<boolean>) => {
      state.showPasswordChangeNeeded = action.payload;
    },
  },
});

export const {
  setToken,
  setLoggedIn,
  setActiveMenuItem,
  logout,
  setNotification,
  setIsLoading,
  setForgotPassword,
  setScope,
  setLastRoute,
  setPasswordChangeNeeded,
} = appSlice.actions;

export default appSlice.reducer;
