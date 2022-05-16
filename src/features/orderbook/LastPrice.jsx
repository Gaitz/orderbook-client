import PropTypes from 'prop-types'
import IconArrowDown from '../../shared/styles/IconArrowDown'
import styles from './OrderBook.module.css'

const LastPrice = ({ lastPrice, gain = 0 }) => {
  let arrow
  switch (gain) {
    case 1:
      arrow = <IconArrowDown rotate={180} />
      break
    case -1:
      arrow = <IconArrowDown />
      break
  }

  return (
    <section className={styles.lastPrice}>
      <div className={styles.lastPrice__text}>{lastPrice}</div>
      <div className={styles.lastPrice__arrow}>{arrow}</div>
    </section>
  )
}

LastPrice.propTypes = {
  lastPrice: PropTypes.string,
  gain: PropTypes.number
}

export default LastPrice
