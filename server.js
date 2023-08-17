const express = require("express");
const app = express();
const port = 3000;

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, stranger!/h1>")
})

app.get("/greeting/:name", (req, res) => {
  res.send(`<h1>Hello ${req.params.name}! It's so great to see you!</h1>`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tip = req.params.total * (req.params.tipPercentage / 100);
  res.send(`<h1>Your tip today is $${tip}.</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
