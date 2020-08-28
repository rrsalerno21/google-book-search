import React from "react";
import HeroText from "../components/HeroText";
import BookSearch from "../components/BookSearch";
import BookSearchResults from "../components/BookSearchResults";

const Search = () => {
  return (
    <div>
      <HeroText
        title="Google Book Search with React"
        subTitle="Best damn thing you've ever seen"
      />
      <BookSearch />
      <BookSearchResults />
    </div>
  );
};

export default Search;
