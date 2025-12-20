import { useWeather } from "../../hooks/useWeather";

export default function ForecastDayCard({ coords, lang, units }) {
  const { forecast } = useWeather(coords?.lat, coords?.lon, units, lang);

  if (!coords || !forecast) return <div className="card bg-base-200 flex-1 h-48" />;

  const daysMap = {};
  forecast.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();
    if (!daysMap[dayKey]) daysMap[dayKey] = item;
  });
  const days = Object.values(daysMap).slice(0, 5);

  return (
    <div className="card bg-base-200 flex-1">
      <div className="card-body gap-2 justify-between">
        {days.map((item, i) => {
          const date = new Date(item.dt * 1000);
          const temp = units === "metric" ? `${Math.round(item.main.temp)}°C` : `${Math.round(item.main.temp)}°F`;
          const dayLabel = `${temp} ${date.toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short" })}`;
          const icon = item.weather[0].main.toLowerCase();

          return (
            <div key={i} className="flex items-center gap-3 bg-base-300 px-4 py-2 rounded-lg">
              <img src={`./icons/weather/${icon}.png`} className="w-9 h-9" />
              <span className="font-bold">{dayLabel}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
