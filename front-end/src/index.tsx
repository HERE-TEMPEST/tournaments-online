import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { TournamentsOnlineApp } from './pages'
import { store } from './redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TournamentsOnlineApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
