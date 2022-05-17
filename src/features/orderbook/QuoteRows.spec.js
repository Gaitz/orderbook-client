import { render, screen, act, waitFor } from '../../shared/testUtil'
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

test('re-render buy quotes when only size changed', async () => {
  store.dispatch(
    updateBuyQuotes({
      buyQuote: [
        {
          price: '47125.5',
          size: '477'
        }
      ]
    })
  )

  render(<QuoteRows type={QUOTE_TYPE.BUY} />)

  act(() => {
    store.dispatch(
      updateBuyQuotes({
        buyQuote: [
          {
            price: '47125.5',
            size: '460'
          }
        ]
      })
    )
  })

  const buyQuoteSizes = await waitFor(() => screen.getAllByTestId(/^buy-quote-size/))
  expect(buyQuoteSizes[0].textContent).toBe('460')
})
