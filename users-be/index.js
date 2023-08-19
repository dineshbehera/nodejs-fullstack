const express = require('express');
const app = express();

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);



// listen on port
const PORT = process.env.BE_NODE_DOCKER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
