import { useLocalStorage } from "./useLocalStorage";

export function useUnits() {
  const [units, setUnits] = useLocalStorage("weatherUnits", "metric");

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  return { units, toggleUnits };
}
