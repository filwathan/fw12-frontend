import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './auth'
import transaction from './transactionReducers';

const authConfig ={
    key: 'auth',
    storage
}

const trxConfig = {
    key: 'transaction',
    storage
}

const reducer = combineReducers({
    auth: persistReducer(authConfig, auth),
    transaction: persistReducer(trxConfig, transaction),
})

export default reducer