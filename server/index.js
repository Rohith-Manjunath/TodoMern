const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnection } = require("./config/dbConnection");
require("dotenv").config();
const { MONGODB_URI, PORT, FRONTEND_DEV_URL, FRONTEND_PRODUCTION_URL } =
  process.env;
const TodoRoute = require("./routes/TodoRoute");

const corsOptions = {
  origin: [FRONTEND_DEV_URL, FRONTEND_PRODUCTION_URL],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/todos", TodoRoute);

dbConnection(MONGODB_URI);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
