import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';
import Landing from './pages/landing';
import history from './history';
import { withRouter } from 'next/dist/client/router';


function App() {
  return (
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact
            render={(routeParams) => {
              const { match } = routeParams;

              console.log(route);

              if (route.path === '/') {
                return <Landing />
              }

              const urlParams = match.params;
              const pageProps = {
                ...routeParams,
                urlParams,
              };

              return (<Layout
                route={route}
                parentPath={route.parentPath}
                routeName={route.name}
              >
                <route.component {...pageProps} />

              </Layout>);
            }}
          />
        ))}
      </Switch>
  );
}

const RoutedAppHOC = withRouter(App);

const RoutedApp = () => (
  <Router history={history}>
    <RoutedAppHOC />
  </Router>
);

export default RoutedApp;
