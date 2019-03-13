const express = require("express");

const cats = require("./routes/cats");

const app = express();
app.use("/cats", cats);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
