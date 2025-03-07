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

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Us', 
        header: 'About Us', 
        message1: 'At MJ Interior Design Studio, we specialize in transforming both interiors and exteriors into stunning, functional spaces. From elegant kitchens and stylish bedrooms to custom railings, feature walls, and breathtaking landscapes, we bring creativity and craftsmanship together to enhance beauty, comfort, and functionality in every detail.',
        message2: 'Our expertise spans every aspect of design, ensuring a seamless process from concept to completion. Whether it’s a full home renovation, an outdoor retreat, or a single-room makeover, we combine innovation with practicality to create spaces that reflect your vision and lifestyle. Using advanced design tools and sustainable materials, we optimize every project for efficiency, durability, and aesthetic excellence.',
        message3: 'With a keen eye for detail and a deep understanding of modern trends, materials, and construction techniques, we craft interiors and exteriors that are both timeless and contemporary. Our goal is to not only enhance the way you live but to elevate your surroundings into spaces that inspire and endure.',
        message4: 'Let MJ Interior Design Studio turn your dream space into reality—inside and out.',
    });
});

app.listen(HTTP_PORT, () => {
    console.log(`Server listening on: ${HTTP_PORT}`);
});
