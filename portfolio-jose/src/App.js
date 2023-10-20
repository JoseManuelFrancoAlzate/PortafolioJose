import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Home from './components/Home/Home';
import Tecnologias from './components/Tecnologias/Tecnologias';
import {Navigate,Routes,Route, useNavigate } from "react-router-dom"
import Proyectos from './components/Proyectos/Proyectos';
import Projects from './components/Projects/Projects';
import ProyectosEjm from './components/ProyectosEjm/ProyectosEjm';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tec' element={<Tecnologias/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/ejm' element={<ProyectosEjm/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/header' element={<Header/>}/>

      </Routes>
    </div> 
  );
}

export default App;
