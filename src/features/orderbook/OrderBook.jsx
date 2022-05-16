import styles from './OrderBook.module.css'
import LastPrice from './LastPrice'

const OrderBook = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.component__title}>Order Book</h2>
      <header className={styles.quote__header}>
        <span>Price (USD)</span>
        <span>Size</span>
        <span>Total</span>
      </header>
      {/* <QuoteRows /> */}
      <LastPrice lastPrice={'47126.0'} gain={1} />
      {/* <QuoteRows /> */}
    </article>
  )
}

export default OrderBook
