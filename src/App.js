import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
      ;
    </>
  );
}

export default App;
