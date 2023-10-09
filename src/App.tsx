import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/Search/SearchPage";
import NewReceipt from "./pages/NewReceipt";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { IReceipt, ReceiptsContext } from "./components/ReceiptsContext";
import useAxios from "axios-hooks";
import loadingSpinner from "./smartplan-logo/loading-spinner.svg";
import { If, Then } from "react-if";
import { PrivateRoute } from "./components/PrivateRoute";
import { IUser, UserContext } from "./components/UserContext";

function App() {
  const [user, setUser] = useState<IUser>();
  const [receipts, setReceipts] = useState<IReceipt[]>([]);
  const [response] = useAxios<IReceipt[]>("http://localhost:3000/api/receipts");

  useEffect(() => {
    if (response.data) {
      setReceipts(response.data);
    }
  }, [response.data]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ReceiptsContext.Provider value={{ receipts, setReceipts }}>
        <If condition={!response}>
          <Then>
            <img src={loadingSpinner} />
          </Then>
        </If>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/search" component={SearchPage} />
          <PrivateRoute exact path="/new" component={NewReceipt} />
        </Switch>
        <Footer />
      </ReceiptsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;