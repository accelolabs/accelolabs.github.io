import { useWeather } from "../../hooks/useWeather";
import { getTranslation } from "../../i18n";

export default function CurrentWeatherCard({ coords, lang, units, theme }) {
  const { currentWeather, uvIndex } = useWeather(coords?.lat, coords?.lon, units, lang);

  if (!coords || !currentWeather) return <div className="card bg-base-200 flex-[2] h-48" />;

  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "mph";
  const iconFilter = theme === "dark" ? "invert(0)" : "invert(1)";

  return (
    <div className="card bg-base-200 flex-[2]">
      <div className="card-body flex-row justify-center items-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-3xl font-bold">{Math.round(currentWeather.main.temp)}{tempUnit}</div>
          <div className="text-sm">{getTranslation(lang, "weather.feelsLike")}: {Math.round(currentWeather.main.feels_like)}{tempUnit}</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src="./icons/stats/sunrise.png" className="w-9 h-9" style={{ filter: iconFilter }} />
              {getTranslation(lang, "weather.sunrise")}: {new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString()}
            </div>
            <div className="flex items-center gap-2">
              <img src="./icons/stats/sunset.png" className="w-9 h-9" style={{ filter: iconFilter }} />
              {getTranslation(lang, "weather.sunset")}: {new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={`./icons/weather/${currentWeather.weather[0].main.toLowerCase()}.png`} className="w-18 h-18" />
          <div>{currentWeather.weather[0].description}</div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <img src="./icons/stats/humidity.png" className="w-9 h-9" style={{ filter: iconFilter }} />
            <div>{currentWeather.main.humidity}%</div>
            <div className="text-sm">{getTranslation(lang, "weather.humidity")}</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/stats/pressure.png" className="w-9 h-9" style={{ filter: iconFilter }} />
            <div>{currentWeather.main.pressure}</div>
            <div className="text-sm">{getTranslation(lang, "weather.pressure")}</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center">
            <img src="./icons/stats/wind.png" className="w-9 h-9" style={{ filter: iconFilter }} />
            <div>{currentWeather.wind.speed} {windUnit}</div>
            <div className="text-sm">{getTranslation(lang, "weather.wind")}</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/stats/uv.png" className="w-9 h-9" style={{ filter: iconFilter }} />
            <div>{uvIndex ?? "N/A"}</div>
            <div className="text-sm">UV</div>
          </div>
        </div>
      </div>
    </div>
  );
}
