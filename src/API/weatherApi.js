const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "http://api.openweathermap.org/geo/1.0";

// Usado para loc via Input
export const searchWeather = async (city) => {
    try {
        const geoRes = await fetch(`${GEO_URL}/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const geoData = await geoRes.json();
        if(!geoData.length) return null;

        const { lat, lon, state, name } = geoData[0];

        // Busca Clima Atual e Previsão em paralelo
        const [weatherRes, forecastRes] = await Promise.all([
            fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`),
            fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        return {
            ...weatherData,
            state: state,
            cityName: name,
            pop: forecastData.list[0]?.pop || 0,
            hourly: forecastData.list.slice(0, 8),
            daily: forecastData.list.filter((_, index) => index % 8 === 0)
        };
    } catch (error) {
        console.error(`Erro ao buscar por cidade: ${error}`);
        return null;
    }
}

// Usado para loc automático (GPS)
export const searchWeatherByCords = async (lat, lon) => {
    try {
        // Busca Clima Atual e Previsão em paralelo
        const [weatherRes, forecastRes] = await Promise.all([
            fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`),
            fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        // Busca o Estado via Reverse Geocoding
        const geoRes = await fetch(`${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`);
        const geoData = await geoRes.json();
        const state = geoData[0]?.state || "";

        return {
            ...weatherData,
            state: state,
            cityName: weatherData.name,
            pop: forecastData.list[0]?.pop || 0,
            hourly: forecastData.list.slice(0, 8),
            daily: forecastData.list.filter((_, index) => index % 8 === 0)
        };
    } catch (error) {
        console.error(`Erro ao buscar por coordenadas: ${error}`);
        return null;
    }
}