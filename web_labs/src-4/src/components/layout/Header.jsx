import SearchBar from "../search/SearchBar";
import LocationBadge from "../search/LocationBadge";

export default function Header({ setCoords, lang, setLang, units, setUnits, theme, setTheme }) {
  return (
    <div className="card bg-base-200">
      <div className="card-body px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <label className="flex items-center gap-2 cursor-pointer shrink-0">
            <input
              type="checkbox"
              className="toggle theme-controller"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <span className="text-sm">
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </span>
          </label>

          <div className="flex-1 w-full">
            <SearchBar lang={lang} onSelectCity={(city) => setCoords({ lat: city.lat, lon: city.lon })} />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="btn btn-sm" onClick={() => setLang(lang === "en" ? "ru" : "en")}>
              {lang.toUpperCase()}
            </button>
            <button className="btn btn-sm" onClick={() => setUnits(units === "metric" ? "imperial" : "metric")}>
              {units === "metric" ? "C" : "F"}
            </button>
            <LocationBadge lang={lang} onLocationSelected={setCoords} />
          </div>
        </div>
      </div>
    </div>
  );
}
