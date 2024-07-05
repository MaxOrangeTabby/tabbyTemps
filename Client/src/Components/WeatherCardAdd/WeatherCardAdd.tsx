import { Box, Card, CardBody, CardHeader, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AddWeatherData, WeatherData } from '../Types/Types'

interface WeatherCardAddProps{
    data: WeatherData | null
    addData: AddWeatherData | null
}

function WeatherCardAdd({data, addData} : WeatherCardAddProps) {
  return (
    <Center w={['90vw', '80vw', '60vw', '55vw', '45vw', '35vw']} position={'absolute'} left={'50%'} transform={'translate(-50%, -50%)'} border={'1px solid #386150'}>
        <Card w={'100%'} fontFamily={'Raleway'}>
            <Flex direction={'row'} justify={'space-between'} align={'center'} gap={'.25rem'}>
                <CardHeader>
                    <Text fontSize={['md','lg','xl', '2xl']} fontWeight={600} letterSpacing={'.05rem'}>{data?.LocationData.country}</Text>
                    <Text fontSize={['sm','md','lg','xl']}>| {data?.City}</Text>
                </CardHeader>
                <Flex direction={'column'} rowGap={'.25rem'}>
                    <Text fontSize={['md', 'lg', 'xl']}>{data?.TempData.feelTempF}F / {data?.TempData.feelTempC}C</Text>
                    <Text fontSize={['sm', 'md', 'lg']}>Feels Like: {data?.TempData.feelTempC} C / {data?.TempData.feelTempF} F</Text>
                </Flex>
            </Flex>

            <CardHeader display={'flex'} justifyContent={'space-between'}>
                <Text fontSize={['sm', 'md', 'lg', 'xl']}>Lat: {data?.LocationData.latitude} / Long: {data?.LocationData.longitude}</Text> 
                <Text fontSize={['sm', 'md', 'lg', 'xl']}>Humidity: {data?.TempData.humidity}</Text>    
            </CardHeader>

            <Divider orientation='horizontal'/>

            <CardBody>
                <Flex direction={'row'} justify={'space-between'} align={'start'} gap={'1.15rem'}>
                    <Flex direction={'column'} justify={'space-between'} fontSize={['.75rem', 'sm', 'md', 'md', 'lg']} gap={'1rem'}>
                        <Text>Wind Direction: {addData?.windDir}</Text>
                        <Text>Wind Speed: {addData?.windMPH} Mph / {addData?.windKPH} Kph</Text>
                        <Text>Gust Speed: {addData?.gustMPH} Mph / {addData?.gustKPH} Kph</Text>
                    </Flex>

                    <Flex direction={'column'} fontSize={['.75rem', 'sm', 'md', 'md', 'md','lg']} gap={'1rem'}>
                        <Text>Heat Index: {addData?.heatIndexF}F / {addData?.heatIndexC}C </Text>
                        <Text>Precipitation: {addData?.precipIn} in / {addData?.precipIn} mm</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    </Center>
  )
}

export default WeatherCardAdd