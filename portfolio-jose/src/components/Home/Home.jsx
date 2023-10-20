import styled from './Home.module.css'
import Card from "../Card/Card";
import Tecnologias from '../Tecnologias/Tecnologias';
import Proyectos from '../Proyectos/Proyectos';
import ProyectosEjm from '../ProyectosEjm/ProyectosEjm';
import Header from '../Header/Header';
import {Link} from "react-router-dom"
function Home() {

let fluido=[{
  id:1,
  let: "Hola"
}]
console.log(`#${fluido[0].let}`)


  return (
    <center>
    <div >
      
    <Header/>
    <div className={styled.divHome}>
      <div className={styled.divDes}>
        <p>
<h5 className={styled.let}>
¡Hola! Soy Jose Franco.
</h5>
        <h5 className={styled.let}>
       Bienvenido a mi rincón en la web.
         Me apasiona aprender nuevas tecnologias he implementarlas en diversos proyectos, aquí compartiré un poco más sobre mí y lo que me mueve.       
         </h5>
         </p>
        <div className={styled.divCard}>
      <center>
     <Card
 image={require('../../img/miImg.jpg')}
     name='Jose Franco'
     profesion="full stack developer"
     />
     </center>
     </div>
     </div>
     </div>


<div id="tec">
  <Tecnologias/>
</div>

<div className={styled.project} id="ejm">
  <ProyectosEjm />
</div>

    </div>
    </center>
  );
}

export default Home;