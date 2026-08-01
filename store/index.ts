
import { configureStore } from "@reduxjs/toolkit";
import authReducre from './slices/authSlice'
import cartReducer from './slices/cartSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            auth: authReducre,
            cart: cartReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
