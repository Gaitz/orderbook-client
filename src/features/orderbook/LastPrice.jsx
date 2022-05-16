import PropTypes from 'prop-types'
import IconArrowDown from '../../shared/styles/IconArrowDown'
import styles from './OrderBook.module.css'
import { useSelector } from 'react-redux'

const UP = 1
const DOWN = -1

const LastPrice = () => {
  const lastPrice = useSelector(state => state.orderbook.lastPrice)
  const gain = useSelector(state => state.orderbook.gain)

  const isUp = gain === UP
  const isDown = gain === DOWN

  let arrow
  switch (gain) {
    case UP:
      arrow = <IconArrowDown rotate={180} />
      break
    case DOWN:
      arrow = <IconArrowDown />
      break
  }

  return (
    <section
      className={`${styles.lastPrice} 
        ${isUp && styles.lastPrice__up} 
        ${isDown && styles.lastPrice__down}`}
    >
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
