import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.push(action.payload);
        },
        removeNotification: (state, action) => {
            return state.filter((notification) => notification.id !== action.payload);
        },
        updateNotification: (state, action) => {
            const index = state.findIndex((notification) => notification.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addNotification, removeNotification, updateNotification } = notificationSlice.actions;
export default notificationSlice.reducer;