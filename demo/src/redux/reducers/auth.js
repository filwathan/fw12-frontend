import {createSlice} from '@reduxjs/toolkit'

import { loginAction } from '../actions/auth'

const initialState = {
    message: null,
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login: (state, {payload})=>{
        //     state.token = payload
        // }
        logout: (state, action)=>{
            state = initialState;
        },
    },
    extraReducers: (build) =>{console.log("masuk ke extra redux")
        build.addCase(loginAction.fulfilled, (state, {payload})=>{
            // state.message = payload.message
            console.log("ini masuk fullfilled")
            // console.log(payload)
            state.token = payload.token
        })        
        // build.addCase(loginAction.rejected, (state, {payload})=>{
        //     state.message = payload.message
        //     console.log("ini masuk rejected")
        //     // console.log(payload)
        //     // state.token = payload.token
        // })        
    } 
})

export const {login} = authReducer.actions

export default authReducer.reducer;