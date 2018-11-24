import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckOutPage';
import OrdersPage from './pages/OrdersPage';



const Router = () => (
  //Switch allows pages to change by path
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/cart' component={Cart}/>
    <Route exact path='/checkout' component={CheckoutPage}/>
    <Route path='/orders/:id' component={OrdersPage}/>
  </Switch>
)



export default Router;