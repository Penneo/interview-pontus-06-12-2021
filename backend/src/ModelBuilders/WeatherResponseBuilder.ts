import {CurrentWeatherResponseApiModel} from "../Models/weather";
import {CurrentWeatherResult} from "../openweathermap/models";

export class WeatherResponseBuilder {
    public build(input: CurrentWeatherResult): CurrentWeatherResponseApiModel {
        return {
            temp: {
                now: input.main.temp,
                min: input.main.temp_min,
                max: input.main.temp_max,
            },
            location: {
                id: input.id,
                name: input.name,
                lat: input.coord.lat,
                lon: input.coord.lon,
            },
            headline: input.weather[0].main,
            description: input.weather[0].description,
            icon: input.weather[0].icon,
        };
    }
}
