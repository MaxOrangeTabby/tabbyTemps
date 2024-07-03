import { WeatherData } from '../Types/Types'
import { Card, CardBody, Divider, Flex, Heading,Text } from '@chakra-ui/react'

interface WeatherCardProps{
    data : WeatherData | null
}

function WeatherCard({data} : WeatherCardProps) {

  return (
    <Card sx={{flexDirection: data?.Id === 'main-card' ? 'row' : 
        {base: 'column-reverse', sm: 'column-reverse',md: 'row'}}}
        fontFamily={'Raleway'}
        mt={'1rem'} 
        border={'2px solid black'}
        >
        <Flex direction={'column'} justify={'center'} align={'center'} px={'1rem'}>
            <Text fontSize={['md', 'lg', 'lg','3xl']}>{data?.TempData.tempF} F</Text>
            <Text fontSize={['sm', 'md', 'lg','xl']}>{data?.TempData.tempC} C</Text>
        </Flex>
    
        <Divider orientation={'vertical'}/>
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
  )
}

export default WeatherCard