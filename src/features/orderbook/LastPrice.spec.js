import { render, screen } from '@testing-library/react'
import LastPrice from './LastPrice'

test('renders arrow down when gain is -1', () => {
  render(<LastPrice gain={-1} />)
  const arrow = screen.getByTitle('arrow')
  expect(arrow).toBeInTheDocument()
  expect(arrow.parentElement.getAttribute('transform')).toBe('rotate(0)')
})

test('renders arrow up when gain is 1', () => {
  render(<LastPrice gain={1} />)
  const arrow = screen.getByTitle('arrow')
  expect(arrow).toBeInTheDocument()
  expect(arrow.parentElement.getAttribute('transform')).toBe('rotate(180)')
})

test('no arrow when gain is 0', () => {
  render(<LastPrice gain={0} />)
  const arrow = screen.queryByTitle('arrow')
  expect(arrow).not.toBeInTheDocument()
})
