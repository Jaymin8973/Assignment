const express = require('express');
const hbs = require('hbs');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Set up static directory to serve
app.use(express.static(path.join(__dirname, 'public')));

// Load locations from JSON file
const locations = JSON.parse(fs.readFileSync('./data/locations.json', 'utf8'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        locations: locations.locations // Pass the locations data to the view
    });
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;

  if (!city) {
      return res.send({
          error: 'You must provide a city!'
      });
  }

  try {
      // Replace with your weather API URL and key
      const apiKey = '46e96f1318864c70a64134029240808';  // Ensure this is your actual API key
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

      const response = await axios.get(url);
      console.log(response.data);  // Log the full response data

      const weatherData = response.data;

      res.send({
          city: weatherData.location.name,
          temperature: weatherData.current.temp_c,
          condition: weatherData.current.condition.text
      });
  } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      res.send({ error: 'Unable to get weather data. Please try again later.' });
  }
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
