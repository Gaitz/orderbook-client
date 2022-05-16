# orderbook-client

## Technical stack

- create-react-app
- redux, redux-toolkit

## Requirements

- [x] Show max 8 quotes for both buy and sell. Quote row should vertical align center.
- [x] Format number with commas as thousands separators.
- [ ] Add hover background color on whole row when mouse hover on the quote.
- [x] Last price is up or down is determine by the data `gain` .
      (1 means up, -1 means down, 0 for changed)
- [x] Price percentage change can be omitted.
- [x] Quote total formula:
  - Sell quotes: sum up quote size from lowest price quote to the highest
  - Buy quotes: sum up quote size from highest price quote to the lowest
- [ ] Add hover calculation tooltip
  - Avg Price = [sumproduct](https://support.microsoft.com/en-us/office/sumproduct-function-16753e75-9f68-4874-94ac-4d2145a2fd2e)( price \* size ) / total
  - Total Value = [sumproduct](https://support.microsoft.com/en-us/office/sumproduct-function-16753e75-9f68-4874-94ac-4d2145a2fd2e)( price \* size )
  * [sumproduct reference](https://support.microsoft.com/en-us/office/sumproduct-function-16753e75-9f68-4874-94ac-4d2145a2fd2e) (see Example 1)
- [ ] Use mock data and a data update timer to present the following animations.

  - When new quote appear(price hasn't shown on the order book before), add highlight animation on whole quote row. Red background color for sell quote. Green background color for buy quote.
  - When quote size change, add highlight animation on size cell. Red background color if size increase. Green background color if size decrease.

- [ ] Bonus point for using [webpack-dev-server proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) connect order book API:

  [https://api.btse.com/futures/api/v2.1/orderbook/L2](https://api.btse.com/futures/api/v2.1/orderbook/L2)

- [x] Bonus point for connecting to Websocket API:

  Endpoint: `wss://ws.btse.com/ws/futures`

  Topic: `orderBook:BTCPFC_0`
