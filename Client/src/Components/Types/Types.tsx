export interface WeatherData{
    City : String
    TempData : WeatherTemps;
    LocationData : WeatherLocation;
  }

  export interface WeatherTemps{
    tempC : number;
    feelTempC : number;
    tempF : number;
    feelTempF : number;

    humidity: number;
  }

  export interface WeatherLocation{
    country: string;
    latitude: number;
    longitude: number;
  }