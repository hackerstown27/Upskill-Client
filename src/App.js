import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Components/Screens/Login/Login";
import Register from "./Components/Screens/Register/Register";
import ForgetPassword from "./Components/Screens/ForgetPassword/ForgetPassword";
import DashBoard  from "./Components/Screens/DashBoard/DashBoard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
