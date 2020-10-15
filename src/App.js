import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import loading from './components/Loading';
import './App.css';

const Page404 = React.lazy(() => import('./components/Page404/Page404'));
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

const App = props => {

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/" name="Home" render={props => <DefaultLayout {...props} />} />

          <Redirect from="*" to="/404" />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default (App);