import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";

import "./CatCard.css";

const CatCard = ({ findIfFavorite, handleFavoriteClick, cat }) => {
  return (
    <Card key={cat._id} className="cat-card">
      <CardContent>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h5" component="h2">
              Fact
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button size="small" onClick={() => handleFavoriteClick(cat)}>
              {findIfFavorite(cat._id) ? "unlike" : "like"}
            </Button>
          </Grid>
        </Grid>
        <Typography component="p">{cat.text}</Typography>
        <Typography color="textSecondary">
          {setToDate(cat.updatedAt)}
        </Typography>
      </CardContent>
    </Card>
  );
};

function setToDate(dateObject) {
  const date = new Date(dateObject);
  return date.toDateString();
}

export default CatCard;
