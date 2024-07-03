import { useEffect, useState } from 'react'

import WeatherCard from '../WeatherCard/WeatherCard';
import { WeatherData } from '../Types/Types';

import axios from 'axios';
import { motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';


function WeatherHighlights() {
    const [houstonData, setHoustonData] = useState<WeatherData | null>(null);
    const [austinData, setAustinData] = useState<WeatherData | null>(null);
    const [dallasData, setDallasData] = useState<WeatherData | null>(null);

    const getCityData = async (city : string) : Promise<WeatherData | null> => {
        try{
            const res = await axios.post('https://tabbytemps.onrender.com/weather-data',{
                location: city
            })
            

            return ({
                Id : 'side-card',
                City : city,
                TempData : {
                  tempC : res.data.current.temp_c,
                  feelTempC : res.data.current.feelslike_c,
                  tempF : res.data.current.temp_f,
                  feelTempF : res.data.current.feelslike_f,
                  humidity : res.data.current.humidity,
                },
                LocationData : {
                  country : res.data.location.country,
                  latitude : res.data.location.lat,
                  longitude : res.data.location.lon
                }
              });
        }
        catch (error){
            console.log(error)
            return null;
        }        
    }

    useEffect(() => {
       const makeCityCard = async () => {
            setHoustonData(await getCityData('Houston'));
            setAustinData(await getCityData('Austin'));
            setDallasData(await getCityData('Dallas'));
       };
       makeCityCard();
   },[])
    

  return (
    <Flex as={motion.div} 
        w={'100%'} 
        justify={'space-evenly'}
        initial={{x: -100}}
        animate={{x: [-80,0]}}
        >
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0, .25, .5, .75, 1]}}
            transition={{ delay: 0.2 }}
            >
            <WeatherCard data={houstonData}/>
        </motion.div>

        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0, .25, .5, .75, 1]}}
            transition={{ delay: 0.4 }}
            >
            <WeatherCard data={austinData}/>
        </motion.div>

        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0, .25, .5, .75, 1]}}
            transition={{ delay: 0.6 }}
            >
            <WeatherCard data={dallasData}/>
        </motion.div>
    </Flex>
  )
}

export default WeatherHighlights