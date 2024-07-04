import { useState } from 'react'
import { AddWeatherData, WeatherData } from '../Types/Types'

import { Card, CardBody, Divider, Flex, Heading, Text, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import WeatherCardAdd from '../../WeatherCardAdd/WeatherCardAdd'

interface WeatherCardProps{
    data : WeatherData | null,
    addData : AddWeatherData | null,
}

function WeatherCard({data, addData} : WeatherCardProps) {
    const [show, setShow] = useState(false)
    
    return (
        <Box>
            <Card 
                onClick={() => setShow(!show)}
                sx={
                    {flexDirection: data?.Id === 'main-card' ? 'row' : 
                    {base: 'column-reverse', sm: 'column-reverse',md: 'row'}}
                    }
                fontFamily={'Raleway'}
                mt={'1rem'} 
                border={'2px solid #58B09C'}
                bg={'#CAF7E2'}
                >
                <Flex direction={'column'} justify={'center'} align={'center'} px={'1rem'}>
                    <Text fontSize={['md', 'lg', 'lg','3xl']}>{data?.TempData.tempF} F</Text>
                    <Text fontSize={['sm', 'md', 'lg','xl']}>{data?.TempData.tempC} C</Text>
                </Flex>
            
                <Divider orientation={'vertical'} />
                <CardBody>
                    <Flex direction={'column'} justify={'center'} align={'center'}>
                        <Heading fontSize={['sm', 'md', 'lg','xl']}>{data?.City}</Heading>
                        <Flex sx={{
                            display: data?.Id === 'main-card' ? 'flex' : 
                            {base: 'none', sm: 'none', md: 'flex' }}}
                            direction={'column'}
                            >
                            <Text>Feels Like: {data?.TempData.feelTempC} C / {data?.TempData.feelTempF} F</Text>
                            <Text>Humidity: {data?.TempData.humidity}</Text>
                            <Text>Lat: {data?.LocationData.latitude} / Long: {data?.LocationData.longitude}</Text>
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>

            <AnimatePresence>
                {show && addData ? <WeatherCardAdd data={data} addData={addData}/> : null}
            </AnimatePresence>
        </Box> 
    )
}

export default WeatherCard