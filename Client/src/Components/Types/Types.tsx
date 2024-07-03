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
  }

  export interface WeatherLocation{

    country: string;
    latitude: number;
    longitude: number;
  }

  export interface WeekTemps{
    monday : string,
    tuesday: string,
    wednesday: string,
    thursday: string, 
    friday: string
  }