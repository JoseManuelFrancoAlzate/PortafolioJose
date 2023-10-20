// App.js
import React, { useState } from 'react';
import Proyecto from '../Proyecto/Proyecto';
import './ProyectosEjm.css';

const ProyectosEjm = () => {
  const [proyectos, setProyectos] = useState([
    {
      titulo: 'Countries', 
      image: require('../../img/countries.png'),
      descripcion: 'Esta página web muestra información sobre países de todo el mundo en tarjetas individuales. Al hacer clic en una tarjeta, podrás acceder a detalles como población, continente, capital, área y una lista de actividades populares en ese país.Para facilitar la navegación, he incorporado un sistema de paginación que divide los países en grupos de 10, accesibles mediante botones de paginación. También puedes usar filtros para explorar países por continente o actividad, así como ordenar la lista alfabéticamente o por población. Si buscas un país en particular, la función de búsqueda te permitirá encontrarlo rápidamente por su nombre. ademas, puedes crear tus propias actividades y asignarlas a tus países favoritos',
      tecnologiasF: ['React', 'Node.js'],
      tecnologiasF: ['React',
      'React-dom',
      'React-router-dom',
      'Redux'],
      libreriasF: ['React-redux',
      'Redux-thunk',
      'Axios',
      'Web-vitals',
      '@testing-library/jest-dom',
      '@testing-library/react',
      '@testing-library/user-event'],
      tecnologiasB: ['Node',
      'Express',
      'PostgreSQL',
      'Sequelize'],
      libreriasB:['Axios',
      'Body-parser',
      'Cookie-parser',
      'Cors',
      'Dotenv',
      'Morgan',
      'Chai',
      'Mocha',
      'Nodemon',
      'Supertest',
      'Supertest-session'],
git:'https://github.com/JoseManuelFrancoAlzate/countries'
    },
    {
      titulo:'Dogs',
      image: require('../../img/dogs.png'),
      descripcion: 'En esta página web encontrarás una amplia variedad de perros, cada uno presentado en su propia tarjeta. Al hacer clic en una tarjeta, verás información detallada sobre el perro seleccionado, como su altura, peso, temperamento y esperanza de vida. Para que sea fácil navegar, he incluido un sistema de paginación que divide los perros en grupos de 8, y puedes moverte entre ellos usando los botones de paginación. También tienes la opción de filtrar los perros por temperamento y si fueron creados desde la página o no. Además, puedes ordenar la lista alfabéticamente o por peso. Si estás buscando un perro en particular, puedes usar la función de búsqueda para encontrarlo rápidamente por su nombre. Adicionalmente, tienes la opción de crear un nuevo perro y agregarlo a la página si lo deseas',
      tecnologiasF: ['React',
      'React-dom',
      'React-router-dom',
      'Redux'],
      libreriasF: ['React-redux',
      'Redux-thunk',
      'Axios',
      'Web-vitals',
      '@testing-library/jest-dom',
      '@testing-library/react',
      '@testing-library/user-event'],
      tecnologiasB: ['Node',
      'Express',
      'PostgreSQL',
      'Sequelize'],
      libreriasB:['Axios',
      'Body-parser',
      'Cookie-parser',
      'Cors',
      'Dotenv',
      'Morgan',
      'Chai',
      'Mocha',
      'Nodemon',
      'Supertest',
      'Supertest-session'],
      git:"https://github.com/JoseManuelFrancoAlzate/dogs"
    },
 
    {
      titulo: 'Nifitygo',
      image: require('../../img/nifitygo.png'),
      descripcion: "Este proyecto representa el culmen de nuestro esfuerzo en el Bootcamp HolaSoyHenry. Desarrollamos un Marketplace de NFT's completo y funcional que ofrece una experiencia de usuario intuitiva. Los usuarios pueden explorar una amplia gama de NFT's, utilizar funciones de búsqueda avanzada, ordenar y filtrar según sus preferencias.Además de las características de exploración, implementamos un sistema de inicio de sesión para usuarios y administradores, así como un carrito de compras personalizado para cada tipo de usuario. Los perfiles permiten a los usuarios mantener un registro de sus NFT's favoritos y comprados.Este proyecto no solo demuestra nuestras habilidades técnicas, sino también nuestra capacidad para colaborar en equipo y crear una experiencia de usuario fluida y atractiva",
      tecnologiasF: ['React',
      'React-dom',
      'React-router-dom',
      'Redux'],
      libreriasF: ['@paypal/react-paypal-js',
      'alert',
      'axios',
      'bootstrap',
      'chart.js',
      'classnames',
      'cloudinary',
      'cloudinary-react',
      'dotenv',
      'gapi-script',
      'mercadopago',
      'paypal',
      'react-chartjs-2',
      'react-google-login',
      'react-redux',
      'react-scripts',
      'reactstrap' ,
      'redux',
      'redux-thunk',
      'sweetalert2',
      'web-vitals'],
      tecnologiasB: ['Node',
      'Express',
      'PostgreSQL',
      'Sequelize'],
      libreriasB:['axios',
      'bcrypt',
      'body-parser',
      'cors',
      'dotenv',
      'jsonwebtoken',
      'morgan' ,
      'nodemailer',
      'nodemon',
      'pg',
      'pg-hstore',
      'sequelize'
    ],
    link: "https://nifytigo.vercel.app/",
    git:'https://github.com/rodri154321/nifytigo'


    },
    {
      titulo: 'Puertas En Vidrio',
      image: 'data:image/jpeg;base64,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',
      descripcion: 'Esta es la página web que Brandon y yo creamos para la empresa de su padre. Ofrece una presentación detallada de nuestros servicios, proyectos realizados y testimonios de clientes satisfechos. Además, hemos implementado una función de inicio de sesión para el administrador. Esto le permitirá agregar y gestionar los productos de manera eficiente.',
      tecnologiasF: ['React'],
      libreriasF: ['Cloudinary React',
      'Cloudinary URL Generation',
      'Axios',
      'Cloudinary',
      'Cloudinary React',
      'Dotenv',
      'React Redux',
      'Redux',
      'Redux Thunk',
      'Serve'],
      tecnologiasB: ['Express',
      'PostgreSQL',
      'Sequelize'],
      libreriasB:['Axios',
      'Body-parser',
      'Cookie-parser',
      'Cors',
      'Dotenv',
      'Morgan',
      'Chai',
      'Mocha',
      'Nodemon',
      'Supertest',
      'Supertest-session'],
      git:'https://github.com/Brandon036/PuertasEnVidrio'

    } 
  ]);

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const handleClickProyecto = (index) => {
    setProyectoSeleccionado(proyectos[index]);
  };

  const handleCloseProyecto = () => {
    setProyectoSeleccionado(null);
  };

  return (
    <div className="divF">
      <h1 className="titulo">Mis Proyectos</h1>

      <div className="contenedor-proyectos">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto">
            <center>
            <h2 className="let" onClick={() => handleClickProyecto(index)}>
              {proyecto.titulo}
            </h2>
            </center>
            {proyectoSeleccionado && proyectoSeleccionado === proyectos[index] && (
              <div className="proyecto-info">
                <Proyecto {...proyectoSeleccionado} onClose={handleCloseProyecto} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectosEjm;
