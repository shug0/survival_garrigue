import React from 'react';
import { Route } from 'react-router';

// Container
import AppContainer from './components/AppContainer';
import Inventory from './components/3_Inventory/Inventory';

export default (
  <Route path="/" component={AppContainer}>
    <Route path="inventory" component={Inventory}/>
  </Route>
);