const express = require('express');
const { genericAnalysis } = require('./azure/genericAnalysis');
const { analyzeSentiment } = require('./azure/analyzeSentiment');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/genericAnalysis', async (req, res) => {
  const text = req.query.text;
  const result = await genericAnalysis(text);

  res.status(200).send(result);
});

app.get('/sentimentAnalysis', async (req, res) => {
  const text = req.query.text;
  const result = await analyzeSentiment(text);

  res.status(200).send(result);
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
