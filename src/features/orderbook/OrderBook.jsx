import styles from './OrderBook.module.css'
import LastPrice from './LastPrice'
import QuoteRows from './QuoteRows'
import { QUOTE_TYPE } from './orderbook.slice'
import { useStore } from 'react-redux'

const OrderBook = () => {
  // const store = useStore()
  // console.log(store.getState())

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
