import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const HeroText = ({ title, subTitle }) => {
  return (
    <Jumbotron className="text-center">
      <h1>{title}</h1>
      <div style={!subTitle ? { display: "none" } : {}}>
        <h2>{subTitle}</h2>
      </div>
    </Jumbotron>
  );
};

export default HeroText;
