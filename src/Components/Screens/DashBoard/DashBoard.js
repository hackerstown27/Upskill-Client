import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../DashBoard/Home/Home";
import Bookmark from "../DashBoard/Bookmark/Bookmark";
import Course from "../DashBoard/Course/Course";


class DashBoard extends Component {
  render() {
    return (
      <div>
          <h1>asfeadf
            </h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="/Course">
            <Course />
          </Route>
          
        </Switch>
      </div>
    );
  }
}

export default DashBoard;




// import React from 'react'
// import Sidenav from './Sidebar/Sidenav'
// import Home from "./Home/Home";
// import { Book } from "@mui/icons-material";

// const Dashboard = () => {
//     return (
//         <div>
            
//             <Sidenav/>
//         </div>
//     )
// }

// export default Dashboard
