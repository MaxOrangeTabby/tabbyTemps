const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://tabbytemps-client.onrender.com/'
}));

const WEATHER_API_KEY  = process.env.WEATHER_API_KEY

app.post('/api/weather-data', async (req, res)=>{
    try{
        const location  = req.body.location
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
        res.json(response.data)
    }
    catch (error){
        console.error("Error: ", error)
    }
});


app.listen(8800, ()=>{
    console.log("Connected backend")
})