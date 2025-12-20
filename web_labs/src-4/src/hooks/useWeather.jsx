import { useState, useEffect } from "react";
import { useFetchJson } from "./useFetchJson";
import { weatherApi } from "../services/weatherApi.jsx";

export function useWeather(lat, lon, units, lang) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [locationName, setLocationName] = useState(null);

  const { data: currentData } = useFetchJson(
    lat && lon ? weatherApi.currentWeather(lat, lon, units, lang) : null,
    [lat, lon, units, lang]
  );
  const { data: forecastData } = useFetchJson(
    lat && lon ? weatherApi.forecast(lat, lon, units, lang) : null,
    [lat, lon, units, lang]
  );
  const { data: airData } = useFetchJson(
    lat && lon ? weatherApi.airPollution(lat, lon) : null,
    [lat, lon]
  );
  const { data: geoData } = useFetchJson(
    lat && lon ? weatherApi.reverseGeocoding(lat, lon) : null,
    [lat, lon]
  );
  const { data: uvData } = useFetchJson(
    lat && lon ? weatherApi.uvIndex(lat, lon) : null,
    [lat, lon]
  );

  useEffect(() => setCurrent(currentData ?? null), [currentData]);
  useEffect(() => setForecast(forecastData ?? null), [forecastData]);
  useEffect(() => setAirQuality(airData ?? null), [airData]);
  useEffect(() => setUvIndex(uvData?.value ?? null), [uvData]);
  useEffect(() => setLocationName(geoData?.[0]?.name ?? currentData?.name ?? null), [geoData, currentData]);

  const loading = !current || !forecast || !airQuality || uvIndex === null;
  const error = !current || !forecast ? "Weather API error" : null;

  return { currentWeather: current, forecast, airQuality, locationName, uvIndex, loading, error };
}
