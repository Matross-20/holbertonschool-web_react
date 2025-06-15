import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async () => {
        const response = await fetch('/api/notifications');
        return response.json();
    }
);

const initialState = {
    list: [],
    loading: false,
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.list.push(action.payload);
        },
        removeNotification: (state, action) => {
            state.list = state.list.filter((notification) => notification.id !== action.payload);
        },
        updateNotification: (state, action) => {
            const index = state.list.findIndex((notification) => notification.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { addNotification, removeNotification, updateNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
