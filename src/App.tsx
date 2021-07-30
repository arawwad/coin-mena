import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Header } from './components/Header';

import styles from './App.module.css';

const Repositories = lazy(() => import('./pages/Repositories'));
const Developers = lazy(() => import('./pages/Developers'));

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/repositories">
              <Repositories />
            </Route>
            <Route exact path="/developers">
              <Developers />
            </Route>
            <Redirect path="*" to="/repositories" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
