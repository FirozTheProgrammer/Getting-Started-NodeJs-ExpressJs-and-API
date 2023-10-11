const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;
app.get("/", (req, res) => {
  res.send("Hello World! My name is Khan not khan polla");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`our phones id ${id}`);

  const phone = phones.find((phone) => phone.id === id);
  res.send(phone);
});

app.listen(port, () => {
  console.log(`my server is running on ${port}`);
});
