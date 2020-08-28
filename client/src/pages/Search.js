import React from "react";
import HeroText from "../components/HeroText";
import BookSearch from "../components/BookSearch";
import BookList from "../components/BookList";

const Search = () => {
  return (
    <div>
      <HeroText
        title="Google Book Search with React"
        subTitle="Best damn thing you've ever seen"
      />
      <BookSearch />
      <BookList title="Search Results" />
    </div>
  );
};

export default Search;
