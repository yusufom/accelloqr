// authActions.js
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'



export const userLogin = createAsyncThunk(
    '/signin',

    async ({ username, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_HOST_NAME}/api/auth/login/`,
                { username, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken', data.data.token)
            return data.data


        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    '/signup',
    async ({ username, password, code }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${process.env.REACT_APP_HOST_NAME}/api/auth/signup/`,
                { username, password, code },
                config
            )
        } catch (error) {
            console.log('latest', error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)

            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)