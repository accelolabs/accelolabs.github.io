import { useWeather } from "../../hooks/useWeather";

export default function ForecastHourCard({ coords, lang, units }) {
  const { forecast } = useWeather(coords?.lat, coords?.lon, units, lang);

  if (!coords || !forecast) return <div className="card bg-base-200 flex-1 h-48" />;

  const hours = forecast.list.slice(0, 5);
  const windUnit = units === "metric" ? "m/s" : "mph";

  return (
    <div className="card bg-base-200 flex-1">
      <div className="card-body gap-2 justify-between">
        {hours.map((item, i) => {
          const date = new Date(item.dt * 1000);
          const time = date.toLocaleTimeString(lang, { hour: "2-digit", minute: "2-digit" });
          const icon = item.weather[0].main.toLowerCase();
          const temp = units === "metric" ? `${Math.round(item.main.temp)}°C` : `${Math.round(item.main.temp)}°F`;
          const windDeg = item.wind.deg;

          return (
            <div key={i} className="flex items-center gap-3 bg-base-300 px-4 py-2 rounded-lg">
              <span className="font-bold">{time}</span>
              <img src={`./icons/weather/${icon}.png`} className="w-9 h-9" />
              <span className="font-bold">{temp}</span>
              <img src="./icons/weather/navigation.png" className="w-7 h-7" style={{ transform: `rotate(${windDeg}deg)` }} />
              <span className="font-bold">{item.wind.speed} {windUnit}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
