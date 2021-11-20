const express = require('express');
const cors = require("cors");
const path = require("path");
const Movie = require("./routes/movies");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/movie" , Movie);
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});



app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

