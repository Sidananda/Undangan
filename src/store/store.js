import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../slices/settingsSlice';
import authReducer from '../slices/authSlice';
import billingReducer from '../slices/billingSlice';
import dashboardReducer from '../slices/dashboardSlice';
import undanganReducer from '../slices/undanganSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer, 
    auth: authReducer,
    billing: billingReducer,
    dashboard: dashboardReducer,
    undangan: undanganReducer,
  },
});
