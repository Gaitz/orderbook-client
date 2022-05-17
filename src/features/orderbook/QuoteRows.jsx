import PropTypes from 'prop-types'
import { QUOTE_TYPE, selectQuotes } from './orderbook.slice'
import { useSelector } from 'react-redux'
import styles from './OrderBook.module.css'

const QuoteRows = ({ type }) => {
  const quotes = useSelector((state) => selectQuotes(state, type))
  const priceStyle =
    type === QUOTE_TYPE.SELL
      ? styles.quote__sell__price
      : styles.quote__buy__price
  const totalStyle =
    type === QUOTE_TYPE.SELL
      ? styles.quote__sell__total
      : styles.quote__buy__total

  // console.log(type, quotes)

  return (
    <section className={styles.quote__list}>
      {quotes.map(({ price, size, total, totalPercent }, index) => (
        <div
          className={`${styles.quote__header} ${styles.quotes__row__text} `}
          key={price}
        >
          <div
            className={`${styles.quote__header__price} ${priceStyle}`}
            data-testid={`${type}-quote-price-${index}`}
          >
            {price}
          </div>
          <div className={styles.quote__header__size}>{size}</div>
          <div className={`${styles.quote__header__total} ${totalStyle}`}
          style={{
            '--block-percent': (100 - Number.parseFloat(totalPercent)) + '%'
          }}>{total}</div>
        </div>
      ))}
    </section>
  )
}

QuoteRows.propTypes = {
  type: PropTypes.oneOf([QUOTE_TYPE.BUY, QUOTE_TYPE.SELL])
}

export default QuoteRows
