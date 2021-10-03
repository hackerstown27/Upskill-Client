import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Components/Screens/Login/Login";
import Register from "./Components/Screens/Register/Register";
import ForgetPassword from "./Components/Screens/ForgetPassword/ForgetPassword";
import DashBoard from "./Components/Screens/Dashboard/DashBoard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetPassword" component={ForgetPassword} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </div>
    );
  }
}

export default App;
