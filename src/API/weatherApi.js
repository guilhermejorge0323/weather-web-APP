const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "http://api.openweathermap.org/geo/1.0";

const fetchFullWeatherData = async (lat, lon, cityName, state) => {
    try {

        const [weatherRes, forecastRes, airRes] = await Promise.all([
            fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=93b3e742a35584af9b86b3e512461b73`),
            fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=93b3e742a35584af9b86b3e512461b73`),
            fetch(`${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=93b3e742a35584af9b86b3e512461b73`)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();
        const airData = await airRes.json();

        return {
            ...weatherData,
            cityName: cityName || weatherData.name,
            state: state || "",
            pop: forecastData.list[0]?.pop || 0,
            hourly: forecastData.list.slice(0, 8),
            daily: forecastData.list.filter((_, index) => index % 8 === 0),
            airQuality: airData.list[0]?.main?.aqi,
            uvIndex: 5
        };
    } catch (error) {
        console.error("Erro ao processar dados da API:", error);
        return null;
    }
};

// 1. Busca por nome da cidade (Input do Header)
export const searchWeather = async (city) => {
    try {
        const geoRes = await fetch(`${GEO_URL}/direct?q=${city}&limit=1&appid=93b3e742a35584af9b86b3e512461b73`);
        const geoData = await geoRes.json();

        if (!geoData || geoData.length === 0) return null;

        const { lat, lon, state, name } = geoData[0];
        return await fetchFullWeatherData(lat, lon, name, state);
    } catch (error) {
        console.error(`Erro na busca por nome: ${error}`);
        return null;
    }
};

// 2. Busca por coordenadas (GPS / Localização Automática)
export const searchWeatherByCords = async (lat, lon) => {
    try {
        // Primeiro descobrimos o nome da cidade/estado via Reverse Geocoding
        const geoRes = await fetch(`${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=93b3e742a35584af9b86b3e512461b73`);
        const geoData = await geoRes.json();

        const cityName = geoData[0]?.name || "";
        const state = geoData[0]?.state || "";

        return await fetchFullWeatherData(lat, lon, cityName, state);
    } catch (error) {
        console.error(`Erro na busca por coordenadas: ${error}`);
        return null;
    }
};