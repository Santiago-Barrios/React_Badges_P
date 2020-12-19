import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import BadgeDetails from '../pages/BadgeDatails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/badges' component={Badges} ></Route>
          <Route exact path='/badges/new' component={BadgeNew} ></Route>
          <Route exact path='/badges/:badgeId' component={BadgeDetails} ></Route>
          <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} ></Route>
          <Route component={NotFound} ></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default App;