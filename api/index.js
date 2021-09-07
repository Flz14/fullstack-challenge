const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

const port = 8000;

app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});

app.use("/", routes);