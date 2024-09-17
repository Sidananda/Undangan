import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  undanganList: [
    { id: 1, namaUndangan: 'Pernikahan ABC', pembeli: 'John Doe', status: 'Aktif' },
    { id: 2, namaUndangan: 'Ulang Tahun DEF', pembeli: 'Jane Doe', status: 'Nonaktif' },
  ],
  loading: false,
  error: null,
};

const undanganSlice = createSlice({
  name: 'undangan',
  initialState,
  reducers: {
    addUndangan: (state, action) => {
      const newId = state.undanganList.length + 1;
      state.undanganList.push({ id: newId, ...action.payload });
    },
    editUndangan: (state, action) => {
      const index = state.undanganList.findIndex(undangan => undangan.id === action.payload.id);
      if (index !== -1) {
        state.undanganList[index] = { ...state.undanganList[index], ...action.payload };
      }
    },
    deleteUndangan: (state, action) => {
      state.undanganList = state.undanganList.filter(undangan => undangan.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addUndangan, editUndangan, deleteUndangan, setLoading, setError } = undanganSlice.actions;
export default undanganSlice.reducer;