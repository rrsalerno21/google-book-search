import React from "react";
import HeroText from "../components/HeroText";
import BookList from "../components/BookList";

const Saved = () => {
  return (
    <div>
      <HeroText title="Saved Books" />
      <BookList title="Saved Books" />
    </div>
  );
};

export default Saved;
