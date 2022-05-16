import { GAIN } from './orderbook.slice'

describe('gain', () => {
  test('parse raw gain', () => {
    expect(GAIN.parseRawGain(-1)).toBe(-1)
    expect(GAIN.parseRawGain(1)).toBe(1)
    expect(GAIN.parseRawGain(0)).toBe(undefined)
  })
})
