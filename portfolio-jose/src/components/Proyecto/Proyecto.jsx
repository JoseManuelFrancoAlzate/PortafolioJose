// Proyecto.js

import React from 'react';
import './Proyecto.css'
const Proyecto = ({ titulo,image, descripcion, tecnologiasF, libreriasF, tecnologiasB, libreriasB, link, onClose,git}) => {
  return (
    <div className='div'>
      <center>
      <button onClick={onClose}  className='close' type="button">
        <h3>X</h3></button>
            <p>
      <h2 className='letT'>{titulo}</h2>
      </p>
      <div className='image-container'>
      <img className="imagen-proyecto" src={image}/>
      <p className="image-description">{descripcion}</p>
      </div>
      <h3 className="losH3">Front end</h3>
      <p className="losN">Tecnologías utilizadas: {tecnologiasF.join(', ')}</p>
      <p className="losN">Librerias utilizadas: {libreriasF.join(', ')}</p>
      <h3 className="losH3">Back end</h3>
      <p className="losN">Tecnologías utilizadas: {tecnologiasB.join(', ')}</p>
      <p className="losN">Librerias utilizadas: {libreriasB.join(', ')}</p>
      <a href={git} target="_blank" rel="noopener noreferrer">
        <h3>Github del proyecto</h3>
</a>
{link ?
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>Deploy Nifitygo</h3>
</a> : ""
}
      </center>
    </div>
  );
};

export default Proyecto;