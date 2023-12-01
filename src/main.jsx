import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./App.jsx";
import {CartProvider} from './Context/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <App/>
        </CartProvider>
    </React.StrictMode>,
)
