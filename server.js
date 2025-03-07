const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Routes


app.listen(HTTP_PORT, () => {
    console.log(`Server listening on: ${HTTP_PORT}`);
});
