import { useWeather } from "../../hooks/useWeather";
import { getTranslation } from "../../i18n";

export default function AQICard({ coords, lang }) {
  const { airQuality } = useWeather(coords?.lat, coords?.lon, "metric", lang);

  if (!coords || !airQuality) return <div className="card bg-base-200 flex-1 h-48" />;

  const aqi = airQuality.list[0].main.aqi;
  const pm25 = airQuality.list[0].components.pm2_5;

  return (
    <div className="card bg-base-200 shadow p-6 flex-1 flex flex-col items-center justify-center gap-2">
      <div className="font-semibold">{getTranslation(lang, "weather.airQuality")}</div>
      <div className="text-xl font-bold">{aqi}</div>
      <div className="font-semibold">PM2.5</div>
      <div className="text-xl font-bold">{pm25} µg/m³</div>
    </div>
  );
}
