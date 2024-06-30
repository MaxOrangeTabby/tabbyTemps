import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoadPage from './Components/LoadPage/LoadPage'
import WeatherPage from './Components/WeatherPage/WeatherPage'
import { PressStart } from './Components/Matter/MatterStepTwo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadPage/>}></Route>
        <Route path='/weather-page' element={<WeatherPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
