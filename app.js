const express = require("express");
const app = express();

app.use(express.json());

app.post("/student", (req, res) => {
  res.send({
    message: "Berhasil menggunakan method POST",
    body: req.body,
  });
});

app.get("/", (req, res) => {
  res.send("Berhasil menggunakan method GET");
});

app.listen(3000, () => {
  console.log("Server Berjalan");
});
