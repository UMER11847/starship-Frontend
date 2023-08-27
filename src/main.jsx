// Core
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Contexts
import GlobalProvider from './contexts/Global/Provider.jsx'
import StoreProvider from './contexts/Store/Provider.jsx'
import CartProvider from './contexts/Cart/Provider.jsx'
// Components
import App from './App.jsx'
// Styling
import './scss/index.scss'
// Utils
import ScrollToTop from './utils/ScrollReset.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <GlobalProvider>
        <StoreProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </StoreProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
