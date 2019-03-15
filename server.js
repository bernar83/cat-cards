const express = require("express");
const path = require("path");

const cats = require("./routes/cats");

const app = express();
app.use("/cats", cats);

if (process.env.NODE_ENV === "production") {
  app.use("/cat-cards/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
