import { useLocalStorage } from "./useLocalStorage";
import { translations } from "../i18n/index.jsx";

export function useI18n() {
  const [lang, setLang] = useLocalStorage("weatherLang", "en");

  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  const t = (key) => {
    const keys = key.split(".");
    let val = translations[lang] || translations.en;
    for (const k of keys) val = val?.[k];
    return val || key;
  };

  return { lang, toggleLang, t, setLang };
}
