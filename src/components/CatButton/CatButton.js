import React from "react";
import Button from "@material-ui/core/Button";

const CatButton = ({ getCats }) => {
  return (
    <Button onClick={getCats} variant="contained" color="primary">
      New Facts!
    </Button>
  );
};

export default CatButton;
