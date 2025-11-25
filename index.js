const express = require('express');
const app = express();
const cors = require ('cors');

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/clientes', cors(),(req, res)=>{
  res.send('hola')
});

app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send('Hello Worlld! alumnos');
});

app.get('/docentes/:control', (req, res) => {
  console.log(req.params);
  res.send('Hello World! control');
});

app.post('/directivos', (req, res) => {
  console.log(req.body);
  res.send('Hello World! directivos');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});