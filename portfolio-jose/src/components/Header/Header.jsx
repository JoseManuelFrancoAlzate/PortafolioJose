import './Header.css';
import {Link}  from 'react-scroll';

const Header = () => {
  return (
    <header>
      <div className="contenedor">
        <nav>
        <div>
              <h1 className="T">
              <Link to={'tec'} smooth={true} offset={100} duration={500}>

                Tecnologias
                </Link>

              </h1>
          </div>
          <div>
              <h1 className="P">
              <Link to='ejm' smooth={true} offset={500} duration={500}>
                Proyectos
                </Link>
              </h1>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
