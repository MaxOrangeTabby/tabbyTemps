import React from 'react'
import {useState}  from 'react'

import axios from 'axios'
import styles from 'WeatherPage.module.css'

import { Flex, Spacer, Divider,  FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Button } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

import { WeatherData} from '../Types/Types'
import InfoPage from '../InfoPage/InfoPage'
import WeatherHighlights from '../WeatherHighlights/WeatherHighlights'
import WeatherCard from '../WeatherCard/WeatherCard'


function SearchPage() {
  const [dataLoaded, setDataLoadded] = useState(false);
  const [dataObj, setDataObj] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);
  
  const submitForm = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      console.log(city)
      const res = await axios.post('http://localhost:8800/api/weather-data', {
        location: city,
      });

      console.log(res.data)

      setDataObj({
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
      
      setDataLoadded(true)
    }
    catch (error){
      console.log(error)
    }
  };

  const btnHover = () => {
      setBtnClicked(true);
  };

  const btnHoverEnd = () => {
    setBtnClicked(false);
  }

  return (
    
    <Flex h={'100vh'} direction={'column'} align={'center'} justify={'space-evenly'}>
      <Flex h={'20%'} direction={'column'} align={'center'} justify={'center'}>
        <WeatherHighlights />
      </Flex>
      <Divider orientation='horizontal' color={'black'}/>

      
        {!dataLoaded ?
        null
        :
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: [.85,1,1.05,1] }}> 
          <WeatherCard data={dataObj} />  
        </motion.div>
        }
     
      <Spacer />
        <form onSubmit={submitForm}>
          <Flex direction={'column'} justify={'center'} align={'center'}>
            <Input type='text' name='city' onChange={(event) =>setCity(event.target.value)}></Input>
            <motion.div>
              <Button as={motion.button} whileHover={{scale: 1.1, borderRadius: '30%'}} onHoverStart={btnHover} onHoverEnd={btnHoverEnd} type='submit' mt={'.5rem'}>
                {!btnClicked ? 'Check The Weather' : <FontAwesomeIcon icon={faCat} />}
              </Button>
            </motion.div>
          </Flex>  
        </form>
      <Spacer />
    </Flex>
  )
}

export default SearchPage