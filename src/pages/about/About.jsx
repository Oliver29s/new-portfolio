import React from "react";
import './about.css'

const About = () => {
  return (
    <div className="experience__job">
      <article className="article__job">
        <h2>Experiencia Laboral</h2>
        <p>
          <p id="p__job">Empresa: </p>Academia Desafio Latam
        </p>
        <p>
          <p id="p__job">Cargo: </p>Desarrollador Full Stack
        </p>
        <p>
          <p id="p__job">Año: </p>Junio 2023 - actualidad
        </p>
        <div className="experience__about">
          <h4>Descripcion</h4>
          <ul>
            <li>Implementación de metodología ágil scrum.</li>
            <li>Puesto en el sector back-end para la realización y mejora de la base de datos.</li>
            <li>Mejora de la Interacción del usuario en la pagina pagina web Devsafio.</li>
            <li>Node js - Nest js - Prisma.</li>
            <li>Docker, github, jira y discord.</li>
            <li>Scrum · Bases de datos · JIRA</li>
          </ul>
        </div>
      </article>
      
    </div>
  );
};

export default About;
