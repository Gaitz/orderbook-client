import { store } from '../../shared/store'
import { render, screen } from '../../shared/testUtil'
import LastPrice from './LastPrice'
import { updateLatestPrice } from './orderbook.slice'

test('renders arrow down when gain is -1', () => {
  store.dispatch(updateLatestPrice({
    lastPrice: '47162.5',
    gain: -1
  }))
  render(<LastPrice />)
  const arrow = screen.getByTitle('arrow')
  expect(arrow).toBeInTheDocument()
  expect(arrow.parentElement.getAttribute('transform')).toBe('rotate(0)')
})

test('renders arrow up when gain is 1', () => {
  store.dispatch(updateLatestPrice({
    lastPrice: '47162.5',
    gain: 1
  }))
  render(<LastPrice />)
  const arrow = screen.getByTitle('arrow')
  expect(arrow).toBeInTheDocument()
  expect(arrow.parentElement.getAttribute('transform')).toBe('rotate(180)')
})

test('no arrow when gain is 0', () => {
  store.dispatch(updateLatestPrice({
    lastPrice: '47162.5',
    gain: 0
  }))
  render(<LastPrice />)
  const arrow = screen.queryByTitle('arrow')
  expect(arrow).not.toBeInTheDocument()
})
