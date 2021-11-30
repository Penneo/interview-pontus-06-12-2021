// @see: https://openweathermap.org/api

// Limitations
// Hourly forecast: unavailable
// Current weather API: available
// Calls per minute: 60
// 3 hour forecast: 5 days
// @see: https://openweathermap.org/price#weather

module.exports = {
    baseURL: 'https://api.openweathermap.org/data/2.5/',

    // this key sometimes expires, just change it: https://home.openweathermap.org/api_keys
    apiKey: 'c808c3b5ad219bada7b3b3857e721b10'
};
