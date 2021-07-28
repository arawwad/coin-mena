import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const Repositories = lazy(() => import('./pages/Repositories'));
const Developers = lazy(() => import('./pages/Developers'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/repositories">
            <Repositories />
          </Route>
          <Route exact path="/developers">
            <Developers />
          </Route>
          <Redirect path="*" to="/repos" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
