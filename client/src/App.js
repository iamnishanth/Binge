import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App bg-primary text-white px-4 md:px-14">
      <Router>
        <Switch>
          <Header />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
