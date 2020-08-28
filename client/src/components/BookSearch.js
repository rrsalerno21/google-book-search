import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const BookSearch = () => {
  return (
    <Container className="border p-4">
      <Form className="mt-3">
        <h2>Book Search</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Blue Like Jazz" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BookSearch;
