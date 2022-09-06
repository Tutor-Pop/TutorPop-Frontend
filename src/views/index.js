import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage'
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const Views = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default Views