import IconArrowDown from '../../shared/styles/IconArrowDown'
import styles from './OrderBook.module.css'
import { useSelector } from 'react-redux'
import { selectIsDownGain, selectIsUpGain, selectLastPrice } from './orderbook.slice'

const LastPrice = () => {
  const lastPrice = useSelector(selectLastPrice)
  const isUp = useSelector(selectIsUpGain)
  const isDown = useSelector(selectIsDownGain)

  let arrow
  if (isUp) {
    arrow = <IconArrowDown rotate={180} />
  }

  if (isDown) {
    arrow = <IconArrowDown />
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

export default LastPrice
