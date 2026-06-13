const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/employees", (req, res) => {
  res.json([
    { id: 1, name: "Priyanka" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Anu" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});