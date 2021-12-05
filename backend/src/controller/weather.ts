import { Request, Response } from 'express';
import {Client} from "../openweathermap/client";
import Axios from "axios";
// @ts-ignore
import {baseURL, apiKey} from "config/openweathermap";
import {WeatherResponseBuilder} from "../ModelBuilders/WeatherResponseBuilder";
import { createInflate } from 'zlib';
import { close } from 'fs';

import { REPL_MODE_SLOPPY } from 'repl';
import { CurrentWeatherResult } from '../openweathermap/models';

const cityArray = require("../../cityList.json");
const cityLength = cityArray.length;


const type = require("../../clientType.json");
const weatherTypes = require("../../weatherTypes.json");
const weatherTypesLength = weatherTypes.length;

const DEFAULT_LOCATION = 'Copenhagen,DK';
const DEFAULT_LOCATION_ID = '2621942';

enum WeatherClientType {
    OpenWeatherMap,
    RandomWeather
};

enum CallType{
    byName,
    byCoords,
    byId
}

const weatherClient = getWeatherClient(type.WeatherClientType);
const responseBuilder = new WeatherResponseBuilder();

export const getByName = async (req: Request, res: Response) => {
    let location;
    location = req.params.location || DEFAULT_LOCATION;

    const weather = await weatherClient.getCurrentByName(location);
    
    if(weatherClient.getType() == WeatherClientType.RandomWeather){
        randomize(CallType.byName, weather);
    }

    res.send(responseBuilder.build(weather));
};

export const getByCoords = async (req: Request, res: Response) => {
    let lat, lon;
    lat = req.query.lat;
    lon = req.query.lon;
    
    const weather = await weatherClient.getCurrentByCoordinates({lat, lon});
    
    if(weatherClient.getType() == WeatherClientType.RandomWeather){
        randomize(CallType.byCoords, weather);
    }

    res.send(responseBuilder.build(weather));
};

export const getById = async (req: Request, res: Response) => {
    let id;
    id = req.params.id || DEFAULT_LOCATION_ID;

    const weather = await weatherClient.getCurrentById(id);

    if(weatherClient.getType() == WeatherClientType.RandomWeather){
        randomize(CallType.byId, weather);
    }

    res.send(responseBuilder.build(weather));

};

function randomize(type: CallType, weather: CurrentWeatherResult){
    weather.main.temp = Math.round((Math.random() * 70 - 30) * 100)/100;
    weather.main.temp_max = Math.round((Math.random() * 70 - 30) * 100)/100;
    weather.main.temp_min = Math.round((Math.random() * 70 - 30) * 100)/100;
    let weatherNbr = Math.floor(Math.random() * weatherTypesLength);
    let weatherType = [weatherTypes[weatherNbr]];
    weather.weather = weatherType;

    if(type != CallType.byId){
        let idNbr = Math.floor(Math.random() * cityLength);
        weather.id = cityArray[idNbr].id;
    }
    
    if(type != CallType.byName){
        let cityNbr = Math.floor(Math.random() * cityLength);
        weather.name = cityArray[cityNbr].name;        
    }
    
    if(type != CallType.byCoords){
        weather.coord.lon = Math.random() * 180 - 90;
        weather.coord.lat = Math.random() * 180 - 90;
    }
};

function getWeatherClient(clientType: WeatherClientType): Client {
    switch (clientType) {
        case WeatherClientType.OpenWeatherMap:
            // Uses data from OpenWeatherMap to show the current weather
            return new Client(Axios, baseURL, apiKey, clientType);
        case WeatherClientType.RandomWeather:
            // Uses random data, wildly inaccurate
            return new Client(Axios, baseURL, apiKey, clientType);
    }
}
