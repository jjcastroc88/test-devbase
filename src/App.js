import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import Person from './components/Person/Person';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/person/:user" component={Person} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
