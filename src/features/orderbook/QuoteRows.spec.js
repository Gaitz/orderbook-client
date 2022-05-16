import { render, screen } from '../../shared/testUtil'
import { store } from '../../shared/store'
import { QUOTE_TYPE, updateSellQuotes, updateBuyQuotes } from './orderbook.slice'
import QuoteRows from './QuoteRows'
import mockWebSocketResponse from './mockWebSocketResponse'

test('renders sell quotes', () => {
  store.dispatch(
    updateSellQuotes(mockWebSocketResponse)
  )
  const sellQuotes = store.getState().orderbook.sellQuotes

  render(<QuoteRows type={QUOTE_TYPE.SELL} />)

  const sellQuotePrices = screen.getAllByTestId(/^sell-quote-price/)
  expect(sellQuotePrices[0].textContent).toBe(sellQuotes[0].price)
})

test('renders buy quotes', () => {
  store.dispatch(
    updateBuyQuotes(mockWebSocketResponse)
  )
  const buyQuotes = store.getState().orderbook.buyQuotes

  render(<QuoteRows type={QUOTE_TYPE.BUY} />)

  const buyQuotePrices = screen.getAllByTestId(/^buy-quote-price/)
  expect(buyQuotePrices[0].textContent).toBe(buyQuotes[0].price)
})
