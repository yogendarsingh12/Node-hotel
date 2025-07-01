const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my hotel');
});

//import routes files
const menuitemsRoutes=require('./routes/menuRoutes');
const personRoutes=require('./routes/personRoutes');


//use the routers
app.use('/menu',menuitemsRoutes)
app.use('/person',personRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
///all task done