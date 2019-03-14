import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import CircularProgress from "@material-ui/core/CircularProgress";
import CatCard from "../../CatCard/CatCard";
import { Grid } from "@material-ui/core";

import "../CatTable.css";

const InfiniteCats = ({ getMoreCats, cats }) => {
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
    >
      {cats.map(cat => {
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
      })}
    </InfiniteScroll>
  );
};

export default InfiniteCats;
