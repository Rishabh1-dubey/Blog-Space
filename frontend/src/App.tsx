
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './Pages/Signup'

import { Blog } from './Pages/Blog'
import { Signin } from './Pages/SignIn'
import Blogs from './Pages/Blogs'
import { Publish } from './Pages/Publish'


function App() {

   

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/blog/:id' element ={<Blog/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/publish' element={<Publish/>}/>
     </Routes>
     
     
     
     </BrowserRouter>
    </>
  )
}

export default App
