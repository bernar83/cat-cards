import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "typeface-roboto";
import CatTable from "./components/CatTable/CatTable";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h3" color="inherit">
              Cat Facts
            </Typography>
          </Toolbar>
        </AppBar>
        <CatTable />
      </div>
    );
  }
}

export default App;
