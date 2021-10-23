import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StoreProvider from "./contexts/StoreContext";
import AuthProvider from "./contexts/AuthContext";

import Header from "./components/Header";
import Home from "./pages/Home";
import NewRelease from "./pages/NewRelease";
import Popular from "./pages/Popular";
import Details from "./pages/Details";
import SearchResult from "./pages/SearchResult";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div className="App min-h-full flex flex-col bg-primary text-white px-1 md:px-14">
      <Router>
        <Switch>
          <AuthProvider>
            <StoreProvider>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewRelease} />
              <Route exact path="/popular" component={Popular} />
              <Route exact path="/:category/:id" component={Details} />
              <Route
                exact
                path="/search/result/:query"
                component={SearchResult}
              />
              <Route exact path="/auth" component={AuthPage} />
            </StoreProvider>
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
