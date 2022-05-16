import { createSlice } from '@reduxjs/toolkit'
import { formatNumber } from '../../shared/utils'

export const GAIN = {
  UP: 1,
  DOWN: -1,
  parseRawGain: (rawGain) => {
    switch (rawGain) {
      case 1:
        return GAIN.UP
      case -1:
        return GAIN.DOWN
      default:
    }
  },
  isUp: (rawGain) => {
    switch (rawGain) {
      case 1:
        return true
      case -1:
        return false
      default:
    }
  },
  isDown: (rawGain) => {
    switch (rawGain) {
      case 1:
        return false
      case -1:
        return true
      default:
    }
  }
}

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
      state.gain = GAIN.parseRawGain(gain)
    }
  }
})

export const selectLastPrice = state => state.orderbook.lastPrice
export const selectIsUpGain = state => GAIN.isUp(state.orderbook.gain)
export const selectIsDownGain = state => GAIN.isDown(state.orderbook.gain)

export const { updateLatestPrice } = orderbookSlice.actions

export default orderbookSlice.reducer
