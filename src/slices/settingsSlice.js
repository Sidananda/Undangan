import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {
        name: 'Joe Max',
        email: 'joemax@example.com',
    },
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile = action.payload;
        },
        updatePassword: (state, action) => {
            console.log('Password updated:', action.payload);
        },
    },
});

export const { updateProfile, updatePassword } = settingsSlice.actions;
export default settingsSlice.reducer;
