const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./db/database");

app.use(express.json());

app.use("/api", require("./routes/index"));

app.listen(3000);
console.log("Server on port", 3000);
