const express = require('express');
const app = express();
const moment = require('moment-timezone');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const timezones = [
        { name: "New York", tz: "America/New_York" },
        { name: "London", tz: "Europe/London" },
        { name: "Tokyo", tz: "Asia/Tokyo" },
        { name: "Sydney", tz: "Australia/Sydney" },
        { name: "Moscow", tz: "Europe/Moscow" },
    ];

    const clocks = timezones.map(tz => ({
        name: tz.name,
        time: moment().tz(tz.tz).format('HH:mm:ss'),
        timezone: tz.tz,
    }));

    res.render('index', { clocks });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
