import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { CartView, HomeView } from '../Views';
import { RoutePaths } from './RoutePaths';

export const AppRouter = () => {

  return(
    <Router>
        <Switch>
            <Route path={RoutePaths.CART} component={CartView} />
            <Route path={RoutePaths.HOME} component={HomeView} />
        </Switch>
    </Router>
  )
    
}
