import styles from './OrderBook.module.css'
import LastPrice from './LastPrice'
import QuoteRows from './QuoteRows'
import { QUOTE_TYPE, updateBuyQuotes, updateLatestPrice, updateSellQuotes } from './orderbook.slice'
import { useStore, useDispatch } from 'react-redux'
import mockWebSocketResponse from './mockWebSocketResponse'

const OrderBook = () => {
  const dispatch = useDispatch()
  const store = useStore()
  console.log(store.getState())

  dispatch(updateBuyQuotes(mockWebSocketResponse))
  dispatch(updateSellQuotes(mockWebSocketResponse))
  dispatch(updateLatestPrice({
    lastPrice: '42576.0',
    gain: '0'
  }))

  return (
    <article className={styles.container}>
      <h2 className={styles.component__title}>Order Book</h2>
      <header className={`${styles.quote__header} ${styles.quote__header__text}`}>
        <div className={styles.quote__header__price}>Price (USD)</div>
        <div className={styles.quote__header__size}>Size</div>
        <div className={styles.quote__header__total}>Total</div>
      </header>
      <QuoteRows type={QUOTE_TYPE.SELL} />
      <LastPrice />
      <QuoteRows type={QUOTE_TYPE.BUY} />
    </article>
  )
}

export default OrderBook
