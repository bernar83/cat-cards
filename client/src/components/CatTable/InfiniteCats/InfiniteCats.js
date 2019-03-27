import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import CircularProgress from "@material-ui/core/CircularProgress";
import CatCard from "../../CatCard/CatCard";
import { Grid } from "@material-ui/core";

import "../CatTable.css";

const InfiniteCats = ({
  getMoreCats,
  cats,
  findIfFavorite,
  handleFavoriteClick
}) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getMoreCats}
      hasMore={true}
      loader={
        <Grid container justify="center" key={0}>
          <Grid item className="cat-table__progress-wrapper" key={0}>
            <CircularProgress size={80} key={0} />
          </Grid>
        </Grid>
      }
      className="MuiGrid-container-41 MuiGrid-spacing-xs-8-63 jss41 jss63"
    >
      {cats.map(cat => {
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
      })}
    </InfiniteScroll>
  );
};

export default InfiniteCats;
