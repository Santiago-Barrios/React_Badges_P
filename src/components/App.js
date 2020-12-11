import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';

import Layout from '../components/Layout';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/badges' component={Badges} ></Route>
          <Route exact path='/badges/new' component={BadgeNew} ></Route>
          <Route component={NotFound} ></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default App;