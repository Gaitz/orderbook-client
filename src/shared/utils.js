export const formatNumber = (numberString) => {
  if (numberString === '') return ''

  if (typeof numberString !== 'string') {
    return
  }

  const isFormatted = numberString.includes(',')
  if (isFormatted) {
    return numberString
  }

  const containDecimalSeparator = numberString.includes('.')
  if (containDecimalSeparator) {
    const num = Number.parseFloat(numberString).toFixed(1)
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1
    }).format(num)
  }

  const num = Number.parseInt(numberString)
  return new Intl.NumberFormat().format(num)
}
