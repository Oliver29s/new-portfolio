import React from "react";
import { imagenProfile } from "../../imagenes";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid ">
      <div className="home__img">
        <div className="div__img">
          <img
            src={imagenProfile[1]}
            className="img_profile"
            alt="javascript"
          />
        </div>
        <div className="div__img">
          <img src={imagenProfile[0]} className="img_profile" alt="react" />
        </div>
        <div className="div__img"> 
          <img src={imagenProfile[3]} className="img_profile" alt="node" />
        </div>
        <div className="div__img">
          <img src={imagenProfile[2]} className="img_profile" alt="nest" />
        </div>
      </div>

      <div className="home__content">
        <div className="home__data">
          <h1>
            {" "}
            <span>Hola, soy Oliver </span>Diseñador y desarrollador wed
          </h1>
          <p className="home__description">
            Soy un desarrollador web full stack con experiencia en HTML, CSS,
            JavaScript, React.js, TypeScript, Node.js, Express, Nest.js y
            Prisma. También tengo experiencia en la creación de bases de datos,
            integración de APIs y soluciones de seguridad.Tengo experiencia en
            liderar equipos de desarrollo en proyectos de gran envergadura,
            obteniendo resultados exitosos. Si estás buscando un desarrollador
            web full stack altamente capacitado y motivado, contáctame para
            conocer más acerca de mi experiencia y habilidades.
          </p>
          <Link to="/about" className="button">
            Mas sobre mí{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
