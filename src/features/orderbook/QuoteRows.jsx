import PropTypes from 'prop-types'
import { QUOTE_TYPE } from './orderbook.slice'

const QuoteRows = ({ type }) => {
  return <>{type}</>
}

QuoteRows.propTypes = {
  type: PropTypes.oneOf([QUOTE_TYPE.BUY, QUOTE_TYPE.SELL])
}

export default QuoteRows
