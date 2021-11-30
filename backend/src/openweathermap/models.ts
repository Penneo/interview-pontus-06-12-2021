export type Coords = {
    lon: number,
    lat: number,
};

export type Prognosis = {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
};

export type PrognosisDescription = {
    id : number,
    description : string,
    main : string,
    icon : string,
};

export type OpenWeatherMapData = {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
}

export type CurrentWeatherResult = {
    coord: Coords,
    weather: PrognosisDescription[],
    // base: string,
    main: Prognosis,
    visibility: number,
    wind: { speed: number, deg: number },
    clouds: { all: number },
    dt: number,
    sys: OpenWeatherMapData,
    timezone: number,
    id: number,
    name: string,
    cod: number
}
