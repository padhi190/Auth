import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store';

const Auth = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        username: '',
        token: '',
    },
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.loggedIn = true;
            state.username = action.payload;
            state.token = Math.random().toString();
        },
        logout: (state) => {
            state.loggedIn = false;
            state.username = '';
            state.token = '';
        }
    }
})

export default Auth.reducer;
export const {login, logout} = Auth.actions;
export const selectAuth = (state: RootState) => state.auth