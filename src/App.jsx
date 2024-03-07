import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Destinations from './Pages/Destinations.jsx'
import Header from './components/Header.jsx'
import UNESCO from './Pages/UNESCO.jsx'
import News from './Pages/News.jsx'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='destinations' element={<Destinations/>}/>
      <Route path='unesco-site' element={<UNESCO/>}/>
      <Route path='news' element={<News/>}/>
    </Routes>
  
    </>
  )
}

export default App
