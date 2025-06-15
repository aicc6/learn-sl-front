import { Provider } from 'react-redux'

const GlobalStateProvider = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>
}

export { GlobalStateProvider }
