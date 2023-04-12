import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('fetchData', async () => {
    try {
        const respo = await axios.get('http://127.0.0.1:3000/api/messages',  {
                  AxiosHeaders: { 'cache-control': 'public, max-age=315576', 'content-length': '14892', 'Content-type': 'application/json' },
                });
        return respo.data;
              } catch (error) {
                return error;
              }
});



const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        greeting: [],
        error: null,
        isLoading: false,
    },
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state, action) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(fetchData.fulfilled, (state, action) => ({
            ...state,
            greeting: action.payload,
            isLoading: false
        }));

        builder.addCase(fetchData.rejected, (state, action) => ({
            ...state,
            isLoading: false,
            error: action.error,
        }))

    }
})

export const greetingReducers = greetingSlice.reducer;