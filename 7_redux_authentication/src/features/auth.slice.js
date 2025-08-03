import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        userData: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.isLogin = true;
            state.userData = action.payload;
        },
        logOutUser: (state, action) => {
            state.isLogin = false;
            userData: null;
        },
    },
});

export const { loginUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
