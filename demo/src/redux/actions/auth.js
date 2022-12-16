import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const loginAction = createAsyncThunk('auth/loginAsync', async ({email, password, callback})=>{
    const {data} = await axios.post('http://localhost:8888/auth/login', {email, password})
    callback()
    console.log("masuk ke action redux")
    const calonPayload = {
        message: data.message,
        token: data.results.token
    }
    return calonPayload
})