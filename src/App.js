import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";

//import react router dom for routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
