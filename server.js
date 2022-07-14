const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "https://localhost:8000",
};

//middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware

const router = require("./routes/productRouter");
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

const port = process.env.port || 8080;

app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
