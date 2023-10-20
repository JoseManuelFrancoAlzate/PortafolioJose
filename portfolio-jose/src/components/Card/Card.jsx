import styled from "./Card.module.css"



const Card =(props)=>{


    return(
        
<div   className={styled.card}>

 <img alt="1"  className={styled.imgCss} src={props.image}/> 
<p  className={styled.letraCards}>{props.name}</p>
 <p  className={styled.letraCards}>{props.profesion}</p>
 <a href="https://www.linkedin.com/in/jose-manuel-franco-alzate-30b964260/" target="_blank" rel="noopener noreferrer">
     <img  alt="2" className={styled.imgCssIc} src={require('../../img/logo-linkendin.png')}/> 
</a>

<a href="https://wa.me/573229227773?text=¡Hola! Estoy interesado en tus servicios." target="_blank" rel="noopener noreferrer">
<img  alt="3" className={styled.imgCssIc} src={require('../../img/4406170.png')}/> 
</a>
<a href="https://github.com/JoseManuelFrancoAlzate" target="_blank" rel="noopener noreferrer">
<img  alt="4" className={styled.imgCssIc} src={require('../../img/logotipo-github.jpg')}/> 
</a>
<a href="mailto:josemanuelalzatefranco12@gmail.com?subject=Asunto del Correo&body=Hola, estoy interesado en...">
<img  alt="5" className={styled.imgCssIc} src={require('../../img/logotipo-gmail.png')}/> 

</a>
<a href="CVJoseManuelFrancoAlzate.pdf" download>
  <button className={styled.button}>Descargar CV</button>
</a>

        </div>
    )
}

export default Card