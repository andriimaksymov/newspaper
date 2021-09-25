import { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./utils/history";
import Default from "./components/Default";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Articles"));
const Error = lazy(() => import("./pages/Error"));

export default function App() {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <Suspense fallback={<Default />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}