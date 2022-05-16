import PropTypes from 'prop-types'
import { QUOTE_TYPE, selectQuotes } from './orderbook.slice'
import { useSelector } from 'react-redux'

const QuoteRows = ({ type }) => {
  const quotes = useSelector(state => selectQuotes(state, type))

  return <>{type}</>
}

QuoteRows.propTypes = {
  type: PropTypes.oneOf([QUOTE_TYPE.BUY, QUOTE_TYPE.SELL])
}

export default QuoteRows
