import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage'
import Dummy from './Dummy';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import MyCourse from './MyCourse';
import RegisterPage from './RegisterPage'

const Views = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dummy' element={<Dummy/>}/>
        <Route path='/my-course' element={<MyCourse/>}/>
      </Routes>
    </div>
  )
}

export default Views