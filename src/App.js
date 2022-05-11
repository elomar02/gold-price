import { React, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { NavBar, Egp, Usd,Sar,Aed,Try } from "./components";
import { useLocation } from "react-router-dom";
import { goldDaily, exchange } from "./apis";
import { Redirect } from "react-router-dom";
import { Container } from "@mui/material";
function App() {
  const [Loading, setLoading] = useState(true);
  const [gold, setGold] = useState([]);
  const [Exchange, setExchange] = useState({});
  useEffect(() => {
    const pathname = window.location.pathname;
    const nameRoute = pathname.substring(1);
    // console.log(nameRoute);
    const getGoldPrice = async (nameRoute) => {
      const data = await goldDaily(nameRoute);
      setGold(data);
      setLoading(false);
    };
    getGoldPrice(nameRoute);
    // exchange
    const getExchange = async () => {
      const dataExc = await exchange();
      // console.log(dataExc);
      setExchange(dataExc);
    };
    getExchange();
  }, [gold]);

  if (Loading) {
    // return <div>loading</div>
    return (
      <Router>
        <Redirect to="/USD" />
      </Router>
    );
  }

  return (
    <div className="App">
      <Router>
        <Redirect to="/EGP" />
        <NavBar />
        <Switch>
          <Container >
            <Route exact path="/EGP">
              <Egp gold={gold} exchange={Exchange} />
            </Route>
            <Route path="/USD">
              <Usd gold={gold} exchange={Exchange} />
            </Route>
            <Route path="/SAR">
              <Sar gold={gold} exchange={Exchange} />
            </Route>
            <Route path="/AED">
              <Aed gold={gold} exchange={Exchange} />
            </Route>
            <Route path="/TRY">
              <Try gold={gold} exchange={Exchange} />
            </Route>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
