import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === key && e.newValue !== null) setStoredValue(JSON.parse(e.newValue));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [key]);

  const setValue = (value) => {
    const val = value instanceof Function ? value(storedValue) : value;
    setStoredValue(val);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(val));
    }
  };

  return [storedValue, setValue];
}
