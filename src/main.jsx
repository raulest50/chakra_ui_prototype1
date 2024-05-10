import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraBaseProvider} from '@chakra-ui/react'

//import {BrowserRouter} from "react-router-dom"; //https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=1378s

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <ChakraBaseProvider>
        <App />
      </ChakraBaseProvider>
    </React.StrictMode>
  ,
)
