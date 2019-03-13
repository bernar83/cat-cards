import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch, Grid } from "@material-ui/core";

import "typeface-roboto";
import "./App.css";
import CatTable from "./components/CatTable/CatTable";

class App extends Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { checked } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
              <Grid item xs={11}>
                <Typography variant="h3" color="inherit">
                  Cat Facts
                </Typography>
              </Grid>

              <Grid item xs={1} className="app-bar__switch-wrapper">
                <Switch
                  checked={checked}
                  onChange={this.handleChange}
                  color="primary"
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <CatTable checked={checked} />
      </div>
    );
  }
}

export default App;
