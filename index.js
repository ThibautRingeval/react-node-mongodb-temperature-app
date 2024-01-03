const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TemperaturesModel = require('./temperature.jsx');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/temperature_bd", { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/getTemperatureData', (req, res) => {
    TemperaturesModel.find()
        .then(data => {
            console.log('Server data:', data);
            return res.json(data);
        })
        .catch(err => res.json({ error: err.message }));
});


app.listen(3001, () => {
    console.log("Server is Running on port 3001");
});
