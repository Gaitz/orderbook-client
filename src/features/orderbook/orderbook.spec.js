import reducer, {
  GAIN,
  updateSellQuotes,
  initialState,
  selectQuotes,
  QUOTE_TYPE
} from './orderbook.slice'
import mockWebSocketResponse from './mockWebSocketResponse'

describe('gain', () => {
  test('parse raw gain', () => {
    expect(GAIN.parseRawGain(-1)).toBe(-1)
    expect(GAIN.parseRawGain(1)).toBe(1)
    expect(GAIN.parseRawGain(0)).toBe(undefined)
  })
})

describe('sell quotes', () => {
  let updatedState

  beforeAll(() => {
    updatedState = Object.assign({}, initialState)
    updatedState.sellQuotes = [
      {
        price: '47,201.0',
        size: '1,581',
        total: '8281',
        totalPercent: '100.0'
      },
      {
        price: '47,200.0',
        size: '756',
        total: '6700',
        totalPercent: '80.9'
      },
      {
        price: '47,198.5',
        size: '1,944',
        total: '5944',
        totalPercent: '71.8'
      },
      {
        price: '47,196.5',
        size: '444',
        total: '4000',
        totalPercent: '48.3'
      },
      {
        price: '47,195.5',
        size: '1,471',
        total: '3556',
        totalPercent: '42.9'
      },
      {
        price: '47,195.0',
        size: '388',
        total: '2085',
        totalPercent: '25.2'
      },
      {
        price: '47,193.5',
        size: '325',
        total: '1697',
        totalPercent: '20.5'
      },
      {
        price: '47,193.0',
        size: '1,372',
        total: '1372',
        totalPercent: '16.6'
      }
    ]
  })

  test('updateSellQuotes() from mock websocket response', () => {
    expect(
      reducer(initialState, updateSellQuotes(mockWebSocketResponse))
    ).toEqual(updatedState)
  })

  test('selectQuotes() with type', () => {
    const stateOrderbook = reducer(
      initialState,
      updateSellQuotes(mockWebSocketResponse)
    )
    expect(
      selectQuotes(
        {
          orderbook: stateOrderbook
        },
        QUOTE_TYPE.SELL
      )
    ).toMatchObject(updatedState.sellQuotes)
  })
})
