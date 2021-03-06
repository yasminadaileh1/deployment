const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use('*', (request, response) => response.status(404).send('404 page not found'));

app.listen(PORT,() => console.log(`Listening to port ${PORT}`));