import { useWeather } from "../../hooks/useWeather";

export default function CityCard({ coords, lang, units }) {
  const { currentWeather } = useWeather(coords?.lat, coords?.lon, units, lang);

  if (!coords || !currentWeather) return <div className="card bg-base-200 flex-1 h-48" />;

  const date = new Date(currentWeather.dt * 1000);
  const tempUnit = units === "metric" ? "°C" : "°F";

  return (
    <div className="card bg-base-200 flex-1 flex flex-col py-5 justify-center items-center">
      <div className="text-2xl font-bold">{currentWeather.name}</div>
      <div className="text-3xl font-bold">{date.toLocaleTimeString()}</div>
      <div className="text-sm">{date.toDateString()}</div>
      <div className="text-xl font-semibold">{Math.round(currentWeather.main.temp)}{tempUnit}</div>
    </div>
  );
}
