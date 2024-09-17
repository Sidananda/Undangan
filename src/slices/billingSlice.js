import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    billingList: [
        {
            id: 1,
            amount: 'Rp2.000.000',
            method: 'QRIS',
            date: '26/08/2024',
            status: 'Sukses',
        },
    ],
};

const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {
        addBilling: (state, action) => {
            const newBilling = {
                id: state.billingList.length + 1,
                ...action.payload,
            };
            state.billingList.push(newBilling);
        },
    },
});

export const { addBilling } = billingSlice.actions;
export default billingSlice.reducer;
