import { render, screen } from '../../shared/testUtil'
import { store } from '../../shared/store'
import { QUOTE_TYPE, updateSellQuote } from './orderbook.slice'
import QuoteRows from './QuoteRows'
import mockWebSocketResponse from './mockWebSocketResponse'

test('renders sell quotes', () => {
  store.dispatch(
    updateSellQuote(mockWebSocketResponse.sellQuote)
  )

  render(<QuoteRows type={QUOTE_TYPE.SELL} />)

  const buyQuotePrices = screen.getAllByTestId(/^buy-quote-price/)
  expect(buyQuotePrices[0]).toBe(mockWebSocketResponse.buyQuote[0].price)
})
