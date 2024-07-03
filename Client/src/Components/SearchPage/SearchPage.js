import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import { Flex, Spacer, Divider, Input, Button } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import WeatherHighlights from '../WeatherHighlights/WeatherHighlights';
import WeatherCard from '../WeatherCard/WeatherCard';
function SearchPage() {
    const [dataLoaded, setDataLoadded] = useState(false);
    const [dataObj, setDataObj] = useState(null);
    const [city, setCity] = useState('');
    const [btnClicked, setBtnClicked] = useState(false);
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            console.log(city);
            const res = await axios.post('https://tabbytemps.onrender.com//api/weather-data', {
                location: city,
            });
            console.log(res.data);
            setDataObj({
                Id: 'main-card',
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
            setDataLoadded(true);
        }
        catch (error) {
            console.log(error);
        }
    };
    const btnHover = () => {
        setBtnClicked(true);
    };
    const btnHoverEnd = () => {
        setBtnClicked(false);
    };
    return (_jsxs(Flex, { h: '100vh', direction: 'column', align: 'center', justify: 'space-evenly', children: [_jsx(Flex, { h: '20%', w: '100%', direction: 'column', align: 'center', children: _jsx(WeatherHighlights, {}) }), _jsx(Divider, { orientation: 'horizontal', color: 'black' }), !dataLoaded ?
                null
                :
                    _jsx(motion.div, { drag: true, dragConstraints: {
                            top: -50,
                            left: -50,
                            right: 50,
                            bottom: 50,
                        }, initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: [.85, 1, 1.05, 1], }, children: _jsx(WeatherCard, { data: dataObj }) }), _jsx(Spacer, {}), _jsx("form", { onSubmit: submitForm, children: _jsxs(Flex, { direction: 'column', justify: 'center', align: 'center', children: [_jsx(Input, { type: 'text', name: 'city', onChange: (event) => setCity(event.target.value) }), _jsx(motion.div, { children: _jsx(Button, { as: motion.button, whileHover: { scale: 1.1, borderRadius: '30%' }, onHoverStart: btnHover, onHoverEnd: btnHoverEnd, type: 'submit', mt: '.5rem', children: !btnClicked ? 'Check The Weather' : _jsx(FontAwesomeIcon, { icon: faCat }) }) })] }) }), _jsx(Spacer, {})] }));
}
export default SearchPage;
