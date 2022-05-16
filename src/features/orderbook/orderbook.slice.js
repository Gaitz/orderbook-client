import { createSlice } from '@reduxjs/toolkit'
import { formatNumber } from '../../shared/utils'

const initialState = {
  lastPrice: '',
  gain: 0
}

export const orderbookSlice = createSlice({
  name: 'orderbook',
  initialState,
  reducers: {
    updateLatestPrice: (state, action) => {
      const { lastPrice, gain } = action.payload
      state.lastPrice = formatNumber(lastPrice)
      state.gain = gain
    }
  }
})

export const { updateLatestPrice } = orderbookSlice.actions

export default orderbookSlice.reducer
