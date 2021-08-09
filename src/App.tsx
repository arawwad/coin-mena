import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './components/Header';

import styles from './App.module.css';
import { ParamsProvider } from './contexts/params';
import { ParamsDisplay } from './components/ParamsDisplay';

const Repositories = lazy(() => import('./pages/Repositories/index'));
const Developers = lazy(() => import('./pages/Developers/index'));

const queryClient = new QueryClient();

function App() {
  return (
    <div className={styles.app}>
      <QueryClientProvider client={queryClient}>
        <ParamsProvider>
          <Router>
            <Header />
            <div className={styles.layout}>
              <ParamsDisplay />
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
            </div>
          </Router>
        </ParamsProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
