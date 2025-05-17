import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes , Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import Payment from './components/Payment'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Checkout/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </>
  )
}

export default App
