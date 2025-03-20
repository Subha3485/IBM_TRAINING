require("dotenv").config();

const express = require("express");
const { connectDB } = require("./configs/db");

//const { route } = require('./route/auth.route');
const cors = require("cors");
const authRoute = require("./route/auth.route");
const { protect } = require("./middleware/auth.middleware");
const { productRouter } = require("./route/product.routs");
//const router = require('./route/auth.route');

// Allow frontend requests

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);

app.use("/api/", productRouter);

app.egr();

app.get("/api/protected", protect, (req, res) => {
res.json({ message: "This is a protected route", user: req.user });
});

const PORT = 8080;

app.listen(PORT, async () => {
     try {
          await connectDB();
          console.log("DB is connected");
          console.log(`Server is running at http://localhost:${PORT}`);
     }
     catch (error) {
          console.log(error.message);
     }
});
