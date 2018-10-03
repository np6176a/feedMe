const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Server' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));