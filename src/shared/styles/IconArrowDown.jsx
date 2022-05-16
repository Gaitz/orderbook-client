import PropTypes from 'prop-types'

const IconArrowDown = ({ rotate = 0 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    role="presentation"
    fill="none"
    fillRule="nonzero"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    transform={'rotate(' + rotate + ')'}
    alt="arrow"
  >
    <title>arrow</title>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
)

IconArrowDown.propTypes = {
  rotate: PropTypes.number
}

export default IconArrowDown
