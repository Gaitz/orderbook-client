import styles from './OrderBook.module.css'
import LastPrice from './LastPrice'
import QuoteRows from './QuoteRows'
import { useDispatch } from 'react-redux'
import { QUOTE_TYPE, updateLatestPrice } from './orderbook.slice'

const OrderBook = () => {
  const dispatch = useDispatch()

  dispatch(updateLatestPrice({
    lastPrice: '47162.5',
    gain: 1
  }))

  return (
    <article className={styles.container}>
      <h2 className={styles.component__title}>Order Book</h2>
      <header className={styles.quote__header}>
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
