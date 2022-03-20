import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import History from './components/History/HistorySection'
import Home from './components/Home1/Home'
import New from './components/News/New'
import Seasons from './components/Seasons1/Seasons'

function App() {

  return (
      <>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='' element={<Home />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/seasons' element={<Seasons />}/>
            <Route path='/news' element={<New />}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
