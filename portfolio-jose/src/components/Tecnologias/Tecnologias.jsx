import styled from './Tecnologias.module.css'
import links from './linksImg';
import { useState } from 'react'

function Tecnologias() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  }

  const handleMouseOut = () => {
    setHoveredIndex(null);
  }

  return (
    <div className={styled.Fondo} >
      <center>
        <div className={styled.div}>
          <h1 className={styled.let}>Tecnologias</h1>
          {links.map((image, index) => (
            <div
              key={index}
              className={styled.cardImg}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <img
                className={`${styled.Img} ${hoveredIndex === index ? styled.ImgHovered : ''}`}
                src={image}
                alt={`Imagen ${index}`} 
              />
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Tecnologias;

//JavaScript
//HTML
//CSS
//Node.js
//React.js
//Redux
//SQL
//Database
//Testing
//Booststrap
//Sequelize
//HTML5
//CSS3
//Express
//PostgreSQL
//Postman




















/*
<div className={styled.slider}>
  <img className={styled.sliderImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"/>
  <img className={styled.sliderImg} src="data:image/png;base64,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"/>
  <img className={styled.sliderImg} src="https://digital55.com/wp-content/uploads/2022/01/Cuando_y_por_que_debo_usar_redux_en_mis_proyectos_frontend.jpg"/>
</div>
*/

/*
<img className={styled.sliderImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"/>

</div>
<div className={styled.elemento}>
    <img className={styled.sliderImg} src="https://www.jovenesprogramadores.cl/wp-content/uploads/2020/07/react.png"/>

</div>
<div className={styled.elemento}>
<img className={styled.sliderImg} src="https://miro.medium.com/v2/resize:fit:400/1*0nHtg7jz-cd49KIb-Za8lg.png"/>
</div>
<div  className={styled.elemento}>
<img className={styled.sliderImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"/>
</div>
<div  className={styled.elemento}>
<img className={styled.sliderImg} src="https://asivaelpaisco.files.wordpress.com/2016/11/css3.png"/>
*/