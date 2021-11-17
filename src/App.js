import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Default from "./components/Default";
import ErrorBoundary from "./components/ErrorBoundary";
import routes from "./utils/routes";

const Home = lazy(() => import("./pages/Home"));
const Articles = lazy(() => import("./pages/Articles"));
const Error = lazy(() => import("./pages/Error"));

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Default />}>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.articles(":slug_name")} component={Articles} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}