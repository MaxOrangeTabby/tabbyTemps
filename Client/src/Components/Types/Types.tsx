export interface WeatherData{
    Id : String, 
    City : String
    TempData : WeatherTemps;
    LocationData : WeatherLocation;
  }

  export interface WeatherTemps{
    tempC: number;
    feelTempC: number;
    tempF: number;
    feelTempF: number;

    humidity: number;

    //condition: string;
    //conditonImg: string;
  }

  export interface WeatherLocation{
    country: string;
    latitude: number;
    longitude: number;
  }

  export interface AddWeatherData{
    gustMPH: number;
    gustKPH: number;
    
    heatIndexF: number;
    heatIndexC: number;

    precipIn: number;
    precipMm: number;

    windDir: string;
    windMPH: number;
    windKPH: number;
  }