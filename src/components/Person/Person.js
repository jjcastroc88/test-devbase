import React, { useState, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import { getUser } from './PersonServices';
import './Person.css';

const Person = ({ match }) => {
  const [user, setUser] = useState();
  const queryUser = match.params.user;
  const content = user && (
    <Col className="person-container">
      <Row className="person-content">
        <Image className="person-image" src={user.avatar} roundedCircle />
        <Col>
          <div className="person-name">{user.name}</div>
          <div>{user.location}</div>
        </Col>
      </Row>
    </Col>
  );
  useEffect(() => {
    !user &&
      getUser(queryUser).then(result => {
        if (result !== 'error') {
          setUser(result);
        }
      });
  });

  return (
    <Col>
      <Header label="Person" isBackButton />
      {content}
    </Col>
  );
};

export default Person;
