import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buyers: [
    { no: 1, namaUndangan: 'ABCD', pembeli: 'DEF', status: 'Aktif' },
    { no: 2, namaUndangan: 'EFGH', pembeli: 'HIJ', status: 'Nonaktif' },
    { no: 3, namaUndangan: 'IJKL', pembeli: 'KLM', status: 'Aktif' },
    { no: 4, namaUndangan: 'IJKL', pembeli: 'KLM', status: 'Aktif' },
    { no: 5, namaUndangan: 'EFGH', pembeli: 'HIJ', status: 'Nonaktif' },
    { no: 6, namaUndangan: 'IJKL', pembeli: 'KLM', status: 'Aktif' },
    { no: 7, namaUndangan: 'IJKL', pembeli: 'KLM', status: 'Aktif' },
    
  ],
  orders: [],
  invitations: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setBuyers: (state, action) => {
      state.buyers = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setInvitations: (state, action) => {
      state.invitations = action.payload;
    },
  },
});

export const { setBuyers, setOrders, setInvitations } = dashboardSlice.actions;

export default dashboardSlice.reducer;
