const express = require('express');
const { genericAnalysis } = require('./azure/genericAnalysis');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/genericAnalysis', async (req, res) => {
  const text = req.query.text;
  const result = await genericAnalysis(text);

  res.status(200).send(result);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
