import { configureStore } from '@reduxjs/toolkit'
import orderbookReducer from '../features/orderbook/orderbook.slice'

export const store = configureStore({
  reducer: {
    orderbook: orderbookReducer
  }
})
