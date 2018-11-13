import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';


const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/cart' component={Cart}/>
  </Switch>
)



export default Router;