import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import loading from './components/Loading';
import classes from './App.module.css';

const Page404 = React.lazy(() => import('./components/Page404/Page404'));
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const ReposContainer = React.lazy(() => import('./containers/ReposContainer'));

const App = props => {

  return (
    <div className={[classes.Wrapper].join(' ')}>
      <div className={[classes.Content].join(' ')}>
        <div className={classes.LayoutBg}>
          <span className={[classes.Circle].join(' ')}></span>
          <span className={[classes.Circle, classes.Small].join(' ')}></span>
          <span className={[classes.Circle, classes.Small].join(' ')}></span>
          <span className={[classes.Circle].join(' ')}></span>
        </div>
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/" name="Home" render={props => <DefaultLayout {...props} />} />
              <Route exact path="/repos" name="User_repos" render={props => <ReposContainer {...props} />} />

              <Redirect from="*" to="/404" />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default (App);