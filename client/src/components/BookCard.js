import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const BookCard = () => {
  return (
    <Card bg="light" className="mb-2">
      <Card.Body>
        <Row>
          <Col sm={4}>
            <Card.Img variant="left" src="holder.js/100px180" />
          </Col>
          <Col sm={8}>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="/book/:id">View Details</Card.Link>
            <Card.Link href="/saved">Save Book</Card.Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
