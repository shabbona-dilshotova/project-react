import './App.css'
import Header from './component/Header'
import HeaderButtom from './component/HeaderButtom'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Asosiy from './Pages/Asosiy'
import Asosiy2 from './Pages/Asosiy2'
import Detail from './Pages/Detail'
function App() {
  return (
    <>
  
      <Header />
      <HeaderButtom />
      <Routes>
      <Route path='/asosiy' element={<Asosiy2/>}  /> 
      <Route path='detail' element={<Detail/>}/>
      <Route path='/' element={ <Asosiy/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
