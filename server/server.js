require("dotenv").config();
const express = require("express");
const cors = require("cors");

// connecting to database
require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/authRoutes"));
app.use("/products", require("./routes/productRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
