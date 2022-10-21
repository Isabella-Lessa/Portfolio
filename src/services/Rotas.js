import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects";
import About from './../pages/About/index';
import Contact from './../pages/Contact/index';
import Error from './Error/index'
import Header from "./Header";

export default function Rotas(){
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={ <About/> }/>
                <Route path="/projects" element={ <Projects/> }/>
                <Route path="/contact" element={ <Contact/> }/>
                <Route path="*" element={ <Error/> }/>
            </Routes>
        </Router>
    )
}