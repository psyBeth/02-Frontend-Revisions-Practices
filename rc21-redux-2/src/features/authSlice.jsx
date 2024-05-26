import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { email: "", password:""},
};
//? With Slice, we can create both action types, action creator functions and reducer of a global state in a single move.

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //? for the action creator func. and reducer
        setUser: (state, action) => {
            state.user = action.payload
        },

        clearUser: (state) => {
            state.user = initialState
        }
    }
});

//? to export the action functions -> destructure from sliceName.actions
export const { setUser, clearUser } = authSlice.actions;

//? to export the reducer of the slice -> sliceName.reducer
export default authSlice.reducer;