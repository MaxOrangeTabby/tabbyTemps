import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoadPage from './Components/StartPage/StartPage'
import SearchPage from './Components/SearchPage/SearchPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoadPage/>}></Route>
          <Route path='/weather-page' element={<SearchPage/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
