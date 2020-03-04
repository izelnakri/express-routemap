import express from 'express';
import displayRoutes from '../index.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('Posted!'));
app.delete('/', (req, res) => res.send('Posted!'));
app.put('/', (req, res) => res.send('Posted!'));
app.post('/users', (req, res) => res.send('posted to user'));

app.listen(port, () => {
  displayRoutes(app);

  console.log(`Example app listening on port ${port}!`)
});
