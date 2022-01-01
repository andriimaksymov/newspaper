import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { articlesSectionsFetchAction } from "./store/articles/actions";
import routes from "./utils/routes";
import Default from "./components/Default";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Articles = lazy(() => import("./pages/Articles"));
const Categories = lazy(() => import("./pages/Categories"));
const Error = lazy(() => import("./pages/Error"));

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(articlesSectionsFetchAction());
    }, [dispatch]);
    return (
        <ErrorBoundary>
            <Router>
                <Suspense fallback={<Default />}>
                    <Switch>
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.search} component={Search} />
                        <Route exact path={routes.categories} component={Categories} />
                        <Route exact path={routes.articles(":slug_name")} component={Articles} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Suspense>
            </Router>
        </ErrorBoundary>
    );
}