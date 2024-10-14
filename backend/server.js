const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const responseRoutes = require("./routes/responseRoute.js");
const mockApiRoutes = require("./routes/mockAPI.js");

dotenv.config();
console.log("MongoDB URI:", process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mock", mockApiRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/responses", responseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
