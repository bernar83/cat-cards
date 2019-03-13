import React, { Component } from "react";
import axios from "axios";
import CatCard from "../CatCard/CatCard";
import CatButton from "../CatButton/CatButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

import "./CatTable.css";

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

  render() {
    return (
      <div className="cat-table__cat-card-grid">
        <Grid container justify="center">
          <Grid item className="cat-table__get-cats-button-wrapper">
            <CatButton getCats={this.getCats} />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          {this.state.isLoading ? (
            <Grid container justify="center">
              <Grid item className="cat-table__progress-wrapper">
                <CircularProgress size={80} />
              </Grid>
            </Grid>
          ) : (
            this.state.cats.map(cat => {
              return (
                <Grid item xs={12} md={6} lg={4} key={cat._id}>
                  <CatCard
                    fact={cat.text}
                    date={cat.updatedAt}
                    id={cat._id}
                    key={cat._id}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </div>
    );
  }
}

export default CatTable;
