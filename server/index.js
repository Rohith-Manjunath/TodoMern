const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnection } = require("./config/dbConnection");
require("dotenv").config();
const { MONGODB_URI, PORT, FRONTEND_URL } = process.env;

const corsOptions = {
  origin: [FRONTEND_URL],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

dbConnection(MONGODB_URI);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
