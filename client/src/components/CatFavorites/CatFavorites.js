import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import CatCard from "../CatCard/CatCard";

class CatFavorites extends Component {
  render() {
    const { favorites, findIfFavorite, handleFavoriteClick } = this.props;
    return (
      <Grid container spacing={8} style={{ width: "100%", margin: "0" }}>
        {favorites.length === 0 ? (
          <Grid container justify="center">
            <Grid item className="cat-table__progress-wrapper">
              <Typography component="p">No favorites yet!</Typography>
            </Grid>
          </Grid>
        ) : (
          favorites.map(cat => {
            return (
              <Grid item xs={12} md={6} lg={4} key={cat._id}>
                <CatCard
                  cat={cat}
                  key={cat._id}
                  findIfFavorite={findIfFavorite}
                  handleFavoriteClick={handleFavoriteClick}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    );
  }
}

export default CatFavorites;
