import {} from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Footer from './Footer'
import Projeto from './Projeto'
import ECommerce from './ECommerce'
import Contato from './Contato'
import Login from './Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projeto" element={<Projeto/>}/>
      <Route path="/ECommerce" element={<ECommerce/>}/>
      <Route path="/Contato" element={<Contato/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App