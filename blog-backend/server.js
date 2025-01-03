const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT=4003;


const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
  
const postsRoutes=require("../blog-backend/routes/posts")
app.use("/", postsRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
