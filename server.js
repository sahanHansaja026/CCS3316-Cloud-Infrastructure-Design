const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const postRouter = require("./routes/pakages");
const DeleteRouter = require("./routes/deleterouter");

app.use(bodyParser.json());
app.use(cors());

app.use(postRouter);
app.use(DeleteRouter);

const PORT = 7500;
const database =
  "mongodb+srv://sahanhansaja026:Mark15267@cluster0.t0p0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(database)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => console.log("Database connection error:", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
