import React from 'react'
import {useState}  from 'react'

import axios from 'axios'

import { Flex, Spacer, Divider,  Input, Button, Image, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

import { AddWeatherData, WeatherData} from '../Types/Types'
import WeatherHighlights from '../WeatherHighlights/WeatherHighlights'
import WeatherCard from '../WeatherCard/WeatherCard'
import OrangeCatIcon from '../Images/orangeCatIcon.png'
import OrangeTextBubble from '../Images/orangeTextBubble.png'
import SearchPageBg from '../Images/searchPageBg.svg'


function SearchPage() {
  const [dataLoaded, setDataLoadded] = useState(false);
  const [catClicked, setCatClicked] = useState(false);
  const [dataObj, setDataObj] = useState<WeatherData | null>(null);
  const [addDataObj, setAddDataObj] = useState<AddWeatherData | null>(null);

  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const submitForm = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      console.log(city)
      const res = await axios.post('https://tabbytemps.onrender.com/api/weather-data', {
        location: city,
      });

      console.log(res.data)

      setDataObj({
        Id: 'main-card',
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
      
      setAddDataObj({
        gustMPH: res.data.current.gust_mph,
        gustKPH: res.data.current.gust_kph,

        heatIndexF: res.data.current.heatindex_f,
        heatIndexC: res.data.current.heatindex_c,

        precipIn: res.data.current.precip_in,
        precipMm: res.data.current.precip_mm,

        windDir: res.data.current.wind_dir,
        windMPH: res.data.current.wind_mph,
        windKPH: res.data.current.wind_kph,
      });
      setDataLoadded(true)
      setIsLoading(false)
      console.log('Data Loaded')
    }
    catch (error){
      console.log(error)
    }
  };


  return (
    <Flex bgImg={SearchPageBg} h={'100vh'} direction={'column'} align={'center'} justify={'space-evenly'} >
      <Flex h={'20%'} w={'100%'} direction={'column'} align={'center'}>
        <WeatherHighlights />
      </Flex>
      <Divider orientation='horizontal' color={'black'}/>

      {!dataLoaded ? null
      :
      
        <Flex direction={'row'} position={'absolute'} right={0} top={'40%'} overflow={'hidden'}>

        <AnimatePresence>
        {catClicked ? null
        :
        <motion.div initial={{opacity: 0}} animate={{opacity: [0,.25,.5,1]}} exit={{opacity: 0}}>
          <Flex>
            <Image boxSize='170px' src={OrangeTextBubble} alt={'Orange Cat Text Bubble'} mb={'4rem'}/>
            <Text w={'50%'} pos={'absolute'} top={'0'} left={'0'} right={'0'} pt={'1.95rem'} pl={'1.25rem'} fontFamily={'Pixelify Sans'} color={'#BF4E30'}>Press The Square To Get More Details!</Text>
          </Flex>
        </motion.div>
        }
        </AnimatePresence>


        <motion.div initial={{x: '100%', rotate: 0}} animate={{x: ['50%', '0%']}}>
          <Image right={0} objectFit={'contain'} boxSize='128px' src={OrangeCatIcon} alt={'Orange Cat Icon'} mt={'4rem'} onClick={() => setCatClicked(!catClicked)}/>
        </motion.div>
        </Flex>  
      }

      {!dataLoaded ?
      null
      :
      <motion.div drag  
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: [.85,1,1.05,1], }}
      > 
        <WeatherCard data={dataObj}  addData={addDataObj} />  
      </motion.div>
      }
    
      <Spacer />
        <form onSubmit={submitForm}>
          <Flex direction={'column'} justify={'center'} align={'center'}>
            <Input 
              type='text' 
              name='city' 
              onChange={(event) =>setCity(event.target.value)} 

              variant='flushed'
              borderBottom={'4px solid #BF4E30'}
              bgColor={'transparent'}
              color={'#BF4E30'}
              
              textAlign={'center'}
              fontSize={['1.25rem','lg', 'lg', 'xl', '2xl']}
              fontWeight={600}
              letterSpacing={'.05rem'}
            >
            </Input>
            <Button
              type='submit'

              onClick={() => setIsLoading(true)}

              variant='outline'
              color={'#BF4E30'}
              mt={'.5rem'}
              border={'none'}

              fontWeight='800'
              fontSize={['1.25rem','lg', 'lg', 'xl', '2xl']}

              isLoading={isLoading}
              spinner={<FontAwesomeIcon icon={faCat} />}
            >
              Check The Weather
            </Button>
          </Flex>  
        </form>
      <Spacer />
    </Flex>
  )
}

export default SearchPage