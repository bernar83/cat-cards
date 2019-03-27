import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CatCard from "../../CatCard/CatCard";
import { Grid } from "@material-ui/core";

import "../CatTable.css";

const CatGrid = ({ cats, isLoading }) => {
  return (
    <Grid container spacing={8}>
      {isLoading && cats.length ? (
        <Grid container justify="center">
          <Grid item className="cat-table__progress-wrapper">
            <CircularProgress size={80} />
          </Grid>
        </Grid>
      ) : (
        cats.map(cat => {
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
  );
};

export default CatGrid;
