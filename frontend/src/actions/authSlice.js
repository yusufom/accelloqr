// authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './auth'
import { enqueueSnackbar } from 'notistack';
import { history } from '../helpers/history';




const sleep = (ms) => new Promise((r) => setTimeout(r, ms));



// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken');
            enqueueSnackbar('Log out Successful', { variant: 'success', })
            // await sleep(500)
            history.navigate('/');
            return {
                ...state,
                loading: false,
                userInfo: null,
                userToken: null,
                error: null,
                isAuthenticated: false,

            }


        },
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
    },
    extraReducers: (builder) => {

        builder
            // login user
            .addCase(userLogin.pending, (state) => {
                // Existing userLogin.pending logic...
                enqueueSnackbar('logging in....', { variant: 'info', })
                return {
                    ...state,
                    loading: true,
                    error: null,
                    isAuthenticated: false,

                }
            })
            .addCase(userLogin.fulfilled, async (state, { payload }) => {
                // Existing userLogin.fulfilled logic...
                enqueueSnackbar('login successful', { variant: 'success', })
                await sleep(1000)
                history.navigate('/dashboard/');
                return {
                    ...state,
                    loading: false,
                    userInfo: payload,
                    userToken: payload.token,
                    isAuthenticated: true,

                }

            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                // Existing userLogin.rejected logic...
                enqueueSnackbar(payload, { variant: 'error', })
                return {
                    ...state,
                    loading: false,
                    error: payload,

                }
            })
            .addCase(registerUser.pending, (state) => {
                // Existing registerUser.pending logic...
                enqueueSnackbar('Submiting....', { variant: 'info', })
                return {
                    ...state,
                    loading: true,
                    error: true,
                    isAuthenticated: false,

                }
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                // Existing registerUser.fulfilled logic...
                enqueueSnackbar('Registration succesful', { variant: 'success', })
                // await sleep(1000)
                // history.navigate('/');
                return {
                    ...state,
                    loading: false,
                    isAuthenticated: false,
                    success: true,
                }
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                // Existing registerUser.rejected logic...
                enqueueSnackbar(payload, { variant: 'error', })
                return {
                    ...state,
                    loading: false,
                    error: payload,
                    isAuthenticated: false

                }
            });
        // register user reducer...
    }
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer