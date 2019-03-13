import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./CatCard.css";

const CatCard = ({ fact, date, id }) => {
  return (
    <Card key={id} className="cat-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          Fact
        </Typography>
        <Typography component="p">{fact}</Typography>
        <Typography color="textSecondary">{setToDate(date)}</Typography>
      </CardContent>
    </Card>
  );
};

function setToDate(dateObject) {
  const date = new Date(dateObject);
  return date.toDateString();
}

export default CatCard;
