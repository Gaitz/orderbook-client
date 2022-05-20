import './App.css'
import OrderBook from '../features/orderbook/OrderBook'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateBuyQuotes, updateLatestPrice, updateSellQuotes } from '../features/orderbook/orderbook.slice'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    // const socket = new WebSocket('wss://ws.btse.com/ws/futures')

    // socket.onopen = () => {
    //   const request = { op: 'subscribe', args: ['orderBookApi:BTCPFC_0'] }
    //   socket.send(JSON.stringify(request))
    // }

    // socket.onmessage = (event) => {
    //   const { data } = JSON.parse(event.data)
    //   if (!data) return

    //   const { lastPrice, gain } = data

    //   dispatch(updateBuyQuotes(data))
    //   dispatch(updateSellQuotes(data))
    //   dispatch(updateLatestPrice({
    //     lastPrice,
    //     gain
    //   }))
    // }

    // return () => {
    //   socket.close()
    // }
  }, [])

  return (
    <div className="App">
      <OrderBook />
    </div>
  )
}

export default App
