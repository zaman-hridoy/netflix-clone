import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import './App.css';


// components
import ComponentLoader from './components/Loader/ComponentLoader';

const NavComponent = Loadable({
  loader: () => import('./components/nav/Nav'),
  loading: ComponentLoader
});

const Homepage = Loadable({
  loader: () => import('./components/home/Homepage'),
  loading: ComponentLoader
});

const DetailsPage = Loadable({
  loader: () => import('./components/Details/Details'),
  loading: ComponentLoader
});

const NotfoundPage = Loadable({
  loader: () => import('./components/Notfound/NotFound'),
  loading: ComponentLoader
})

function App() {
  return (
    <div className="app">
      <NavComponent />
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/:type/:id" component={DetailsPage} />
          {/* <Route path="/tv/:id" component={DetailsPage} /> */}
          <Route path="/not-found" component={NotfoundPage} />
          <Route component={NotfoundPage} />
      </Switch>
    </div>
  );
}

export default App;
