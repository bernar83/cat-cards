import React, { Component } from "react";
import axios from "axios";
import CatButton from "../CatButton/CatButton";
import { Grid, Typography } from "@material-ui/core";

import "./CatTable.css";
import InfiniteCats from "./InfiniteCats/InfiniteCats";
import CatGrid from "./CatGrid/CatGrid";

class CatTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.getCats();
  }

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
    const { cats, isLoading } = this.state;
    const { checked } = this.props;

    return (
      <div className="cat-table__cat-card-grid">
        <Grid container justify="center">
          <Grid item className="cat-table__get-cats-button-wrapper">
            {checked ? (
              <Typography variant="caption">Inifite Scroll!</Typography>
            ) : (
              <CatButton getCats={this.getCats} />
            )}
          </Grid>
        </Grid>
        {checked ? (
          <InfiniteCats getMoreCats={this.getMoreCats} cats={cats} />
        ) : (
          <CatGrid cats={cats} isLoading={isLoading} />
        )}
      </div>
    );
  }
}

export default CatTable;
