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
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: async (state) => {
            localStorage.removeItem('userToken');
            enqueueSnackbar('Log out Successful', { variant: 'success', })
            await sleep(1000)
            history.navigate('/');
            return {
                ...state,
                loading: false,
                userInfo: null,
                userToken: null,
                error: null
            }

        },
    },
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            enqueueSnackbar('logging in....', { variant: 'info', })
            return {
                ...state,
                loading: true,
                error: null
            }
        },
        [userLogin.fulfilled]: async (state, { payload }) => {
            enqueueSnackbar('login successful', { variant: 'success', })
            await sleep(1000)
            history.navigate('/dashboard/');
            return {
                ...state,
                loading: false,
                userInfo: payload,
                userToken: payload.token
            }
        },
        [userLogin.rejected]: (state, { payload }) => {
            enqueueSnackbar(payload, { variant: 'error', })
            return {
                ...state,
                loading: false,
                error: payload
            }
        },
        // register user reducer...
        [registerUser.pending]: (state) => {
            enqueueSnackbar('Submiting....', { variant: 'info', })
            return {
                ...state,
                loading: true,
                error: true,
            }
        },
        [registerUser.fulfilled]: async (state, { payload }) => {
            enqueueSnackbar('Registration succesful', { variant: 'success', })
            await sleep(1000)
            history.navigate('/');
            return {
                ...state,
                loading: false,
                success: true
            }
        },
        [registerUser.rejected]: (state, { payload }) => {
            enqueueSnackbar(payload, { variant: 'error', })
            return {
                ...state,
                loading: false,
                error: payload
            }

        },
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer