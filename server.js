const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}! It's so great to see you!</h1>`)
});



app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});