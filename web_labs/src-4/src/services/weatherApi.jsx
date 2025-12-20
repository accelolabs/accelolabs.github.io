const API_KEY = "df9775f457f5f0c6a7cdb145313d3171";
const BASE_URL = "https://api.openweathermap.org";

export const weatherApi = {
  geocoding: (city, limit = 5) => {
    return `${BASE_URL}/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=${limit}&appid=${API_KEY}`;
  },

  reverseGeocoding: (lat, lon, limit = 1) => {
    return `${BASE_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${API_KEY}`;
  },

  currentWeather: (lat, lon, units = "metric", lang = "en") => {
    return `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`;
  },

  forecast: (lat, lon, units = "metric", lang = "en") => {
    return `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`;
  },

  airPollution: (lat, lon) => {
    return `${BASE_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  },

  uvIndex: (lat, lon) => {
    return `${BASE_URL}/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  },
};
