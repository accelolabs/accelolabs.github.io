import { useState } from "react";
import Header from "./Header";
import CityCard from "../weather/CityCard";
import CurrentWeatherCard from "../weather/CurrentWeatherCard";
import ForecastDayCard from "../weather/ForecastDayCard";
import ForecastHourCard from "../weather/ForecastHourCard";
import AQICard from "../weather/AQICard";

export default function AppShell() {
  const [coords, setCoords] = useState(null);
  const [lang, setLang] = useState("en");
  const [units, setUnits] = useState("metric");
  const [theme, setTheme] = useState("light");

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl px-6 flex flex-col gap-6">
        <Header 
          setCoords={setCoords} 
          lang={lang} 
          setLang={setLang} 
          units={units} 
          setUnits={setUnits} 
          theme={theme}
          setTheme={setTheme}
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <CityCard coords={coords} lang={lang} units={units} theme={theme} />
            <CurrentWeatherCard coords={coords} lang={lang} units={units} theme={theme} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <ForecastDayCard coords={coords} lang={lang} units={units} theme={theme} />
            <ForecastHourCard coords={coords} lang={lang} units={units} theme={theme} />
            <AQICard coords={coords} lang={lang} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
