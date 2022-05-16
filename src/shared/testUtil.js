import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
// Import your own reducer
import { store as defaultStore } from './store'

function render (
  ui,
  {
    preloadedState,
    store = defaultStore,
    ...renderOptions
  } = {}
) {
  function Wrapper ({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
