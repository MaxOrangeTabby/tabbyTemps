import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Card, CardBody, Divider, Flex, Heading, Text } from '@chakra-ui/react';
function WeatherCard({ data }) {
    return (_jsxs(Card, { sx: { flexDirection: data?.Id === 'main-card' ? 'row' :
                { base: 'column-reverse', sm: 'column-reverse', md: 'row' } }, fontFamily: 'Raleway', mt: '1rem', border: '2px solid black', children: [_jsxs(Flex, { direction: 'column', justify: 'center', align: 'center', px: '1rem', children: [_jsxs(Text, { fontSize: ['md', 'lg', 'lg', '3xl'], children: [data?.TempData.tempF, " F"] }), _jsxs(Text, { fontSize: ['sm', 'md', 'lg', 'xl'], children: [data?.TempData.tempC, " C"] })] }), _jsx(Divider, { orientation: 'vertical' }), _jsx(CardBody, { children: _jsxs(Flex, { direction: 'column', justify: 'center', align: 'center', children: [_jsx(Heading, { fontSize: ['sm', 'md', 'lg', 'xl'], children: data?.City }), _jsxs(Flex, { sx: {
                                display: data?.Id === 'main-card' ? 'flex' :
                                    { base: 'none', sm: 'none', md: 'flex' }
                            }, direction: 'column', children: [_jsxs(Text, { children: ["Feels Like: ", data?.TempData.feelTempC, " C / ", data?.TempData.feelTempF, " F"] }), _jsxs(Text, { children: ["Humidity: ", data?.TempData.humidity] }), _jsxs(Text, { children: ["Lat: ", data?.LocationData.latitude, " / Long: ", data?.LocationData.longitude] })] })] }) })] }));
}
export default WeatherCard;
