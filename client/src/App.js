import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "typeface-roboto";
import "./App.css";
import CatTable from "./components/CatTable/CatTable";

class App extends Component {
  state = {
    checked: false,
    cats: [],
    favorites: [],
    isLoading: true
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
    if (this.state.checked === true) {
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

  favoriteFact = cat => {
    const { favorites } = this.state;
    favorites.push(cat);
    this.setState({ favorites: favorites });
  };

  removeFavoriteFact = catId => {
    const { cats } = this.state;
    if (cats.length > 0) {
      const catFactIndex = cats.map(cat => cat._id).indexOf(catId);
      cats.splice(catFactIndex);
      this.setState({ cats: cats });
    }
  };

  findIfFavorite = catId => {
    const { favorites } = this.state;
    if (favorites.map(cat => cat._id).indexOf(catId) === -1) {
      return false;
    }
    return true;
  };

  render() {
    const { checked, cats, isLoading } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Grid container>
                <Grid item xs={11}>
                  <Typography variant="h3" color="inherit">
                    Cat Facts
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Route
            path="/"
            render={props => (
              <CatTable
                {...props}
                checked={checked}
                cats={cats}
                isLoading={isLoading}
                getCats={this.getCats}
                getMoreCats={this.getMoreCats}
                handleChange={this.handleChange}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
