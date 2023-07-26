import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio ">
      <h2 className="section__title">Portafolio</h2>
      <div className="portfolio__container ">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
