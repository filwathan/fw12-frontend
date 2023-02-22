import {createSlice} from '@reduxjs/toolkit'

import { loginAction, registerAction } from '../actions/auth'

const initialState = {
    message: null,
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: ()=>{
            return initialState;
        },
    },
    extraReducers: (build) =>{
        build.addCase(loginAction.fulfilled, (state, action)=>{
            state.message = null
            state.token = action.payload
        })        
        build.addCase(loginAction.rejected, (state, action)=>{
            state.message = action.payload
            state.token = null
        })        
        build.addCase(registerAction.fulfilled, (state, action)=>{
            state.message = null
            state.token = action.payload
        })        
        build.addCase(registerAction.rejected, (state, action)=>{
            state.message = action.payload
            state.token = null
        })        
    } 
})

export const {logout: logoutAction} = authReducer.actions

export default authReducer.reducer;