import React from "react";
import PortfolioCard from "./cards/PorftolioCard";
import styles from "./Portfolio.module.css";
import { PortfolioCardData } from "../PortfolioCardData";

const PortfolioList = PortfolioCardData.map(
  ({ title, logo, description, tools }) => (
    <PortfolioCard
      key={title}
      title={title}
      logo={logo}
      description={description}
      tools={tools}
    />
  )
);

/***
 *  Object destructuring examples:
 * 
 * Eg. 1 that's a bit better, as you can control the exact props you want to use.
 * I prefer this approach, because it's shorter than repeating prop/value pairs like: `<Component prop={prop} .../>` and still readable:

  const PortfolioList = PortfolioCardData.map(({title, logo, description, tools}) => (
    <PortfolioCard
      {... { title, description, tools, logo, key: title }}
    />
  ));

 * Eg. 2 that's shorter, but less explicit (and less readable):

  const PortfolioList = PortfolioCardData.map((props) => (
    <PortfolioCard {...{key: props.title, ...props }} />
  ))

*/

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles["text-box"]}>
        <h2 className={styles["heading-secondary"]}>PORTFOLIO</h2>
      </div>
      <div className={styles["card-container"]}>{PortfolioList}</div>
    </section>
  );
};

export default Portfolio;
