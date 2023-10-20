import styled from "./Proyectos.module.css"
import React, { useState } from 'react';

function Proyectos() {



  return (
    <div  className={styled.divF}>
        <h1 className={styled.titulo}>Mis proyectos</h1>
<div className={styled.divImg}>

        <h1 className={styled.letDogs}>Proyecto individual dogs</h1>
        <div className={styled.cardDogs}>
        <img  className={styled.imgDogs} src={require('../../img/dogs.png')}    /> 
</div>

        <h1 className={styled.letCountries}>Proyecto invividual countries</h1>
        <div className={styled.cardCountries}>
        <img className={styled.imgCountries}  src={require('../../img/countries.png')}  /> 
     
        </div>
</div>
<center>
        <h1 className={styled.letNifitygo}>Proyecto final nifitygo</h1>
        <div className={styled.cardNifitygo}>
        <img  className={styled.imgNifitygo} src={require('../../img/nifitygo.png')}    />
        </div> 
        </center>
    </div>
  );
}

export default Proyectos;
