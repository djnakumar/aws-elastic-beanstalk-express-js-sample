const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Learning to the point of getting handy at what we do'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
