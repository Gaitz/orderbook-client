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
  isUp: (gain) => {
    switch (gain) {
      case GAIN.UP:
        return true
      case GAIN.DOWN:
        return false
      default:
    }
  },
  isDown: (gain) => {
    switch (gain) {
      case GAIN.UP:
        return false
      case GAIN.DOWN:
        return true
      default:
    }
  }
}

export const QUOTE_TYPE = {
  BUY: 'buy',
  SELL: 'sell'
}

const initialState = {
  lastPrice: '',
  gain: 0,
  buyQuote: [],
  sellQuote: []
}

export const orderbookSlice = createSlice({
  name: 'orderbook',
  initialState,
  reducers: {
    updateLatestPrice: (state, action) => {
      const { lastPrice, gain } = action.payload
      state.lastPrice = formatNumber(lastPrice)
      state.gain = GAIN.parseRawGain(gain)
    },
    updateBuyQuote: (state, action) => {
      const { data } = action.payload
      if (Array.isArray(data)) {
        // state.buyQuote = data.map()
      }
    },
    updateSellQuote: (state, action) => {
      const { data } = action.payload
      if (Array.isArray(data)) {
        // state.buyQuote = data.map()
      }
    }
  }
})

export const selectLastPrice = state => state.orderbook.lastPrice
export const selectIsUpGain = state => GAIN.isUp(state.orderbook.gain)
export const selectIsDownGain = state => GAIN.isDown(state.orderbook.gain)

export const { updateLatestPrice, updateBuyQuote, updateSellQuote } = orderbookSlice.actions

export default orderbookSlice.reducer
