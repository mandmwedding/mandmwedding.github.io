import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import English from './English';
import French from './French';

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/en" component={English}></Route>
      <Route exact path="/fr" component={French}></Route>
    </Switch>
  );
};

export default Main;
