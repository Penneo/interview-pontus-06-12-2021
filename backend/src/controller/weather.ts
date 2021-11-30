import { Request, Response } from 'express';
import {Client} from "../openweathermap/client";
import Axios from "axios";
// @ts-ignore
import {baseURL, apiKey} from "config/openweathermap";
import {WeatherResponseBuilder} from "../ModelBuilders/WeatherResponseBuilder";

const DEFAULT_LOCATION = 'Copenhagen,DK';
const DEFAULT_LOCATION_ID = '2621942';

enum WeatherClientType {
    OpenWeatherMap,
    RandomWeather
};

const weatherClient = getWeatherClient(WeatherClientType.OpenWeatherMap);
// const weatherClient = getWeatherClient(WeatherClientType.RandomWeather);
const responseBuilder = new WeatherResponseBuilder();

export const getByName = async (req: Request, res: Response) => {
    const location = req.params.location || DEFAULT_LOCATION;
    const weather = await weatherClient.getCurrentByName(location);

    res.send(responseBuilder.build(weather));
};

export const getByCoords = async (req: Request, res: Response) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    const weather = await weatherClient.getCurrentByCoordinates({lat, lon});

    res.send(responseBuilder.build(weather));
};

export const getById = async (req: Request, res: Response) => {
    const id = req.params.id || DEFAULT_LOCATION_ID;

    const weather = await weatherClient.getCurrentById(id);

    res.send(responseBuilder.build(weather));
};

function getWeatherClient(clientType: WeatherClientType): Client {
    switch (clientType) {
        case WeatherClientType.OpenWeatherMap:
            // Uses data from OpenWeatherMap to show the current weather
            return new Client(Axios, baseURL, apiKey);
        case WeatherClientType.RandomWeather:
            // Uses random data, wildly inaccurate
            throw new Error("not yet implemented"); // TODO
    }
}
