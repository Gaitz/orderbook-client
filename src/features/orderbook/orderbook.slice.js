import { createSelector, createSlice } from '@reduxjs/toolkit'
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

export const MAX_QUOTES = 8

export const initialState = {
  lastPrice: '',
  gain: 0,
  buyQuotes: [],
  sellQuotes: []
}

const smallerThan = (max) => (_, index) => index < max
const computeTotalAndFormat = (computed, { price, size }) => {
  const latest = computed[computed.length - 1]
  const total = (
    Number.parseInt(latest?.total ?? 0) + Number.parseInt(size)
  ).toString()

  computed.push({
    price: formatNumber(price),
    size: formatNumber(size),
    total
  })

  return computed
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
    updateBuyQuotes: (state, action) => {
      const { buyQuote } = action.payload
      if (Array.isArray(buyQuote)) {
        state.buyQuotes = buyQuote
          .filter(smallerThan(MAX_QUOTES))
          .reduce(computeTotalAndFormat, [])
      }
    },
    updateSellQuotes: (state, action) => {
      const { sellQuote } = action.payload
      if (Array.isArray(sellQuote)) {
        state.sellQuotes = sellQuote
          .filter(smallerThan(MAX_QUOTES))
          .reduceRight(computeTotalAndFormat, [])
          .reverse()
      }
    }
  }
})

export const selectLastPrice = (state) => state.orderbook.lastPrice
export const selectIsUpGain = (state) => GAIN.isUp(state.orderbook.gain)
export const selectIsDownGain = (state) => GAIN.isDown(state.orderbook.gain)
export const selectQuotes = createSelector(
  [
    (state) => state.orderbook.sellQuotes,
    (state) => state.orderbook.buyQuotes,
    (state, type) => type
  ],
  (sellQuotes, buyQuotes, type) => {
    if (type === QUOTE_TYPE.SELL) {
      return sellQuotes
    }
    if (type === QUOTE_TYPE.BUY) {
      return buyQuotes
    }
  }
)

export const { updateLatestPrice, updateBuyQuotes, updateSellQuotes } =
  orderbookSlice.actions

export default orderbookSlice.reducer
