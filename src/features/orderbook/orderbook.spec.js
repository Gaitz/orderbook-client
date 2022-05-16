import reducer, {
  GAIN,
  updateSellQuote,
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
        size: '1581',
        total: '8281'
      },
      {
        price: '47,200.0',
        size: '756',
        total: '6700'
      },
      {
        price: '47,198.5',
        size: '1944',
        total: '5944'
      },
      {
        price: '47,196.5',
        size: '444',
        total: '4000'
      },
      {
        price: '47,195.5',
        size: '1471',
        total: '3556'
      },
      {
        price: '47,195.0',
        size: '388',
        total: '2085'
      },
      {
        price: '47,193.5',
        size: '325',
        total: '1697'
      },
      {
        price: '47,193.0',
        size: '1372',
        total: '1372'
      }
    ]
  })

  test('updateSellQuote() from mock websocket response', () => {
    expect(
      reducer(initialState, updateSellQuote(mockWebSocketResponse))
    ).toEqual(updatedState)
  })

  test('selectQuotes() with type', () => {
    const stateOrderbook = reducer(
      initialState,
      updateSellQuote(mockWebSocketResponse)
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
