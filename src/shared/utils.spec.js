import { formatNumber } from './utils'

test('Format empty string', () => {
  expect(formatNumber('')).toBe('')
})

test('Format number string "47144.0" with comma', () => {
  const input = '47144.0'
  expect(formatNumber(input)).toBe('47,144.0')
})

test('Format number string keep origin if does not > 1000', () => {
  const input = '7.0'
  expect(formatNumber(input)).toBe('7.0')
})

test('Format number string without .', () => {
  const input = '2235'
  expect(formatNumber(input)).toBe('2,235')
})

test('Format formatted number string', () => {
  const input = '47,144.0'
  expect(formatNumber(input)).toBe(input)
})
