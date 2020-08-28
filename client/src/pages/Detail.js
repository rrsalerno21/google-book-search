import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";

const Detail = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // API call to get book using id
  });
  return (
    <React.Fragment>
      <Jumbotron>
        <h1>Title by Author</h1>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col size="md-12"></Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>Summary</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Detail;
