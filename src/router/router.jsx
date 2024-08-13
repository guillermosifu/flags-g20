
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flags from '../Flags/Flags'
import Detail from '../detail'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Flags/>}/>
        <Route path='/flags/detail/:name' element={<Detail/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default Router
