import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './Context/ProductContexr.jsx'
import { Provider } from "react-redux";
import {store} from './App/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <React.StrictMode>
    <ProductProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ProductProvider>
  </React.StrictMode>,
  </BrowserRouter>
 
)
