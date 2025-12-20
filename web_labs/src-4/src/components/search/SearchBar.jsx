import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { weatherApi } from "../../services/weatherApi";
import { getTranslation } from "../../i18n";

export default function SearchBar({ onSelectCity, lang }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery || selected) return setSuggestions([]);
    const fetchSuggestions = async () => {
      try {
        const url = weatherApi.geocoding(debouncedQuery, 5);
        const res = await fetch(url);
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSuggestions();
  }, [debouncedQuery, selected]);

  const handleSelect = (city) => {
    setQuery(city.name);
    setSuggestions([]);
    setSelected(true);
    if (onSelectCity) onSelectCity(city);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSelected(false);
  };

  return (
    <div className="form-control w-full relative">
      <div className="input input-bordered flex items-center gap-2 w-full">
        <img src="./icons/search.png" className="w-4 h-4" />
        <input
          type="text"
          className="grow"
          placeholder={getTranslation(lang, "search.placeholder")}
          value={query}
          onChange={handleChange}
        />
      </div>

      {suggestions.length > 0 && (
        <div className="absolute top-full mt-1 bg-base-200 shadow w-full rounded-md z-50">
          {suggestions.map((s, i) => (
            <div key={i} className="px-3 py-2 hover:bg-base-300 cursor-pointer" onClick={() => handleSelect(s)}>
              {s.name}, {s.country}
            </div>
          ))}
        </div>
      )}

      {debouncedQuery && suggestions.length === 0 && !selected && (
        <div className="absolute top-full mt-1 bg-base-200 shadow w-full rounded-md z-50 px-3 py-2 text-sm text-gray-500">
          {getTranslation(lang, "search.noResults")}
        </div>
      )}
    </div>
  );
}
