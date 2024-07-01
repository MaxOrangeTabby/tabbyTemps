import React from 'react'
import { WeatherData } from '../Types/Types'
import { Card, CardBody, Divider, Stack, Flex, Heading,Text } from '@chakra-ui/react'

interface WeatherCardProps{
    data : WeatherData | null
}

function WeatherCard({data} : WeatherCardProps) {
  return (
    <Card direction={'row'} fontFamily={'Raleway'} mt={'1rem'} border={'2px solid black'}>
        <Flex direction={'column'} justify={'center'} align={'center'} px={'1rem'}>
            <Text fontSize={'3xl'}>{data?.TempData.tempF} F</Text>
            <Text fontSize={'xl'}>{data?.TempData.tempC} C</Text>
        </Flex>
    
        <Divider orientation='vertical'  />
            <CardBody>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <Heading>{data?.City}</Heading>
                    <Text>Feels Like: {data?.TempData.feelTempC} C / {data?.TempData.feelTempF} F</Text>
                    <Text>Humidity: {data?.TempData.humidity}</Text>
                    <Text>Lat: {data?.LocationData.latitude} / Long: {data?.LocationData.longitude}</Text>
                </Flex>
            </CardBody>
    </Card>
  )
}

export default WeatherCard