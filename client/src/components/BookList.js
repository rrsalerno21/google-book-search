import React from "react";
import { Container } from "react-bootstrap";
import BookCard from "./BookCard";

const BookList = ({ title, list }) => {
  return (
    <Container className="border mt-3 p-4">
      <h2 className="mb-3">{title}</h2>
      <BookCard />
      <BookCard />
    </Container>
  );
};

export default BookList;
