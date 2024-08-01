import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShowBook from './pages/ShowBooks.jsx'
import DeleteBook from './pages/DeleteBooks.jsx'
import EditBook from './pages/EditBooks.jsx'
import CreateBook from './pages/CreateBooks.jsx'

const App  = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/books/create" element={<CreateBook/>}/>
      <Route  path="/books/details/:id" element={<ShowBook/>}/>
      <Route  path="/books/edit/:id" element={<EditBook/>}/>
      <Route  path="/books/delete/:id" element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App
