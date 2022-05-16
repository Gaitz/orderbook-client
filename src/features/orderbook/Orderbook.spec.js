import { render, screen } from '@testing-library/react'
import OrderBook from './OrderBook'

test('renders Order Book title', () => {
  render(<OrderBook />)
  const textTitle = screen.getByText(/Order Book/i)
  expect(textTitle).toBeInTheDocument()
})

test('renders quote header row', () => {
  render(<OrderBook />)
  const price = screen.getByText('Price (USD)')
  const size = screen.getByText('Size')
  const total = screen.getByText('Total')

  expect(price).toBeInTheDocument()
  expect(size).toBeInTheDocument()
  expect(total).toBeInTheDocument()
})
