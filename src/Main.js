import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
import English from './English';
import French from './French';

const Main = () => {
  return (
    <HashRouter>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/en" component={English}></Route>
      {/* <Route exact path="/en/questions" component={English} state=""></Route>
      <Route exact path="/en/schedule" component={English}></Route>
      <Route exact path="/en/location" component={English}></Route>
      <Route exact path="/en/rsvp" component={English}></Route> */}
      <Route exact path="/fr" component={French}></Route>
      {/* <Route exact path="/fr/questions" component={French}></Route>
      <Route exact path="/fr/horaire" component={French}></Route>
      <Route exact path="/fr/location" component={French}></Route>
      <Route exact path="/fr/rsvp" component={French}></Route> */}
    </HashRouter>
  );
};

export default Main;
