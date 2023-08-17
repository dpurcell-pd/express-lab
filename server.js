const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>
  <a href="/greeting">Go To Greeting</a>`)
})

app.get("/greeting", (req, res) => {
  res.send("<h1>Hello, stranger!</h1>");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`<h1>Hello ${req.params.name}! It's so great to see you!</h1>`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const tip = req.params.total * (req.params.tipPercentage / 100).toFixed(2);
  res.send(`<h1>Your tip today is $${tip}.</h1>`);
});

app.get("/magic/:question/", (req, res) => {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const answerIndex = responses.length - 1;
  const answer = Math.floor(Math.random() * answerIndex);
  res.send(`<h1>${req.params.question}...?</h1>
        <h2>${responses[answer]}</h2>
    `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
