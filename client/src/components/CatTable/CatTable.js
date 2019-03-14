import React, { Component } from "react";
import CatButton from "../CatButton/CatButton";
import { Grid, Typography } from "@material-ui/core";

import "./CatTable.css";
import InfiniteCats from "./InfiniteCats/InfiniteCats";
import CatGrid from "./CatGrid/CatGrid";

class CatTable extends Component {
  componentDidMount() {
    this.props.getCats();
  }

  render() {
    const { checked, cats, isLoading, getCats, getMoreCats } = this.props;

    return (
      <div className="cat-table__cat-card-grid">
        <Grid container justify="center">
          <Grid item className="cat-table__get-cats-button-wrapper">
            {checked ? (
              <Typography variant="caption">Inifite Scroll!</Typography>
            ) : (
              <CatButton getCats={getCats} />
            )}
          </Grid>
        </Grid>
        {checked ? (
          <InfiniteCats getMoreCats={getMoreCats} cats={cats} />
        ) : (
          <CatGrid cats={cats} isLoading={isLoading} />
        )}
      </div>
    );
  }
}

export default CatTable;
