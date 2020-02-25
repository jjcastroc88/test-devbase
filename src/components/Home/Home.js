import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Button, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';

const topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

const Home = () => {
  const history = useHistory();
  const goToPerson = person => history.push(`/person/${person}`);
  const content = topFive.map((person, index) => (
    <Button key={index} onClick={() => goToPerson(person)}>
      {person}
    </Button>
  ));
  return (
    <Col>
      <Header label="Home" />
      <Row>
        <h3>Top 5 GitHub Users</h3>
        <p>Tap the username to see more information</p>
      </Row>
      <Row className="button-content">{content}</Row>
    </Col>
  );
};

export default Home;
