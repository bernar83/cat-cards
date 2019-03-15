import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch, Grid } from "@material-ui/core";
import axios from "axios";

import "typeface-roboto";
import "./App.css";
import CatTable from "./components/CatTable/CatTable";

class App extends Component {
  state = {
    checked: false,
    cats: [],
    isLoading: true
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
    if (this.state.checked == true) {
      this.getCats();
    }
  };

  getCats = () => {
    this.setState({ isLoading: true });
    const url = "/cats";
    axios
      .get(url)
      .then(cats => {
        this.setState({ cats: cats.data, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getMoreCats = () => {
    const { cats } = this.state;
    const url = "/cats";
    axios
      .get(url)
      .then(response => {
        this.setState({ cats: cats.concat(response.data) });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { checked, cats, isLoading } = this.state;

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
        <CatTable
          checked={checked}
          cats={cats}
          isLoading={isLoading}
          getCats={this.getCats}
          getMoreCats={this.getMoreCats}
        />
      </div>
    );
  }
}

export default App;
