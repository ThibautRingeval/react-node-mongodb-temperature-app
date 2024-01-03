const mongoose = require('mongoose')


const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    }
});

const DataPointSchema = new mongoose.Schema({
    date : {
        type: Date,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    }
});

const TemperaturesSchema = new mongoose.Schema({
    city_info: {
        type: CitySchema,
        required: true,
    },
    data:{
        type: [DataPointSchema],
        required: true
    }
});


const TemperaturesModel = mongoose.model('Temperatures', TemperaturesSchema, 'temperatures');


module.exports = TemperaturesModel;