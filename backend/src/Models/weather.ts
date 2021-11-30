export type CurrentWeatherResponseApiModel = {
    temp: {
        now: number,
        min: number,
        max: number,
    },
    icon: string,
    headline: string,
    description: string,
    location: {
        id: number,
        name: string,
        lon: number,
        lat: number,
    }
}
