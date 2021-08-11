const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
var app = express();

app.use(cors());
//connect Database
connectDB();

require("./models/user");
require("./models/post");

app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
