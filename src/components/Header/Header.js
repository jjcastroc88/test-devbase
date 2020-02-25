import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './Header.css';

const Header = ({ label, isBackButton }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const backButton = isBackButton && (
    <div className="back-button" onClick={goBack}>
      Back
    </div>
  );
  return (
    <Col className="header-content">
      {backButton}
      {label}
    </Col>
  );
};

export default Header;
