import {createAsyncThunk} from '@reduxjs/toolkit'
import http from '../../helpers/http'

export const loginAction = createAsyncThunk(
    'auth/loginAsync', 
    async ({ email, password, cb }, { rejectWithValue })=>{
        try {
            const {data} = await http().post('auth/login', {email, password})
            cb()
            return data.results.token;            
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
            return rejectWithValue(error.message);
            }            
        }        
    }
)

export const registerAction = createAsyncThunk(
    'auth/registerAsync', 
    async ({ firstName, lastName, email, phone, password, cb }, { rejectWithValue })=>{
        try {
            console.log(firstName)
            console.log(lastName)
            console.log(email)
            console.log(phone)
            console.log(password)
            const {data} = await http().post('auth/register', {firstName, lastName, email, phone, password})
            cb()
            return data.results.token;            
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
            return rejectWithValue(error.message);
            }            
        }        
    }
)