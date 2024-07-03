import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';
function WeatherHighlights() {
    const [houstonData, setHoustonData] = useState(null);
    const [austinData, setAustinData] = useState(null);
    const [dallasData, setDallasData] = useState(null);
    const getCityData = async (city) => {
        try {
            const res = await axios.post('http://localhost:8800/api/weather-data', {
                location: city
            });
            return ({
                Id: 'side-card',
                City: city,
                TempData: {
                    tempC: res.data.current.temp_c,
                    feelTempC: res.data.current.feelslike_c,
                    tempF: res.data.current.temp_f,
                    feelTempF: res.data.current.feelslike_f,
                    humidity: res.data.current.humidity,
                },
                LocationData: {
                    country: res.data.location.country,
                    latitude: res.data.location.lat,
                    longitude: res.data.location.lon
                }
            });
        }
        catch (error) {
            console.log(error);
            return null;
        }
    };
    useEffect(() => {
        const makeCityCard = async () => {
            setHoustonData(await getCityData('Houston'));
            setAustinData(await getCityData('Austin'));
            setDallasData(await getCityData('Dallas'));
        };
        makeCityCard();
    }, []);
    return (_jsxs(Flex, { as: motion.div, w: '100%', justify: 'space-evenly', initial: { x: -100 }, animate: { x: [-80, 0] }, children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: [0, .25, .5, .75, 1] }, transition: { delay: 0.2 }, children: _jsx(WeatherCard, { data: houstonData }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: [0, .25, .5, .75, 1] }, transition: { delay: 0.4 }, children: _jsx(WeatherCard, { data: austinData }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: [0, .25, .5, .75, 1] }, transition: { delay: 0.6 }, children: _jsx(WeatherCard, { data: dallasData }) })] }));
}
export default WeatherHighlights;
