const express = require('express');
const path = require('path');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Home', 
        header: 'MJ Interior Design Studio', 
        message: 'At MJ Interior Design Studio, we bring your visions to life with innovative and sustainable solutions. Our team creates beautiful, functional spaces that inspire and transform.',
    });
});

app.listen(HTTP_PORT, () => {
    console.log(`Server listening on: ${HTTP_PORT}`);
});
