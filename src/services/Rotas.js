import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header/index.jsx';
import About from './../pages/About/index.jsx';
import Contact from './../pages/Contact/index.jsx';
import Projects from './../pages/Projects/index.jsx';
import Footer from './Footer/index.jsx';

export default function Rotas() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={ <About/> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path='/projects' element={ <Projects/> }/>
        </Routes>
        <Footer/>
    </Router>
  )
}
