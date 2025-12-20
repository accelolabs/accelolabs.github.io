import { useState } from "react";
import { getTranslation } from "../../i18n";

export default function LocationBadge({ onLocationSelected, lang }) {
  const [loading, setLoading] = useState(false);

  const fetchLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoading(false);
        onLocationSelected({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      },
      () => {
        setLoading(false);
        alert(getTranslation(lang, "errors.noLocation"));
      }
    );
  };

  return (
    <button className="btn text-white flex gap-2" style={{ backgroundColor: "#4CBB17" }} onClick={fetchLocation}>
      <img src="./icons/current-location.png" className="w-4 h-4" />
      {loading ? getTranslation(lang, "errors.loading") : getTranslation(lang, "search.currentLocation")}
    </button>
  );
}
