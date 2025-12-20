export const translations = {
  ru: {
    search: {
      placeholder: 'Поиск города...',
      noResults: 'Город не найден',
      currentLocation: 'Текущая локация',
    },
    weather: {
      feelsLike: 'Ощущается',
      wind: 'Ветер',
      humidity: 'Влажность',
      pressure: 'Давление',
      sunrise: 'Восход',
      sunset: 'Закат',
      forecast: 'Прогноз на 5 дней',
      hourlyForecast: 'Почасовой прогноз',
      airQuality: 'Качество воздуха',
      aqi: {
        good: 'Хорошее',
        fair: 'Удовлетворительное',
        moderate: 'Умеренное',
        poor: 'Плохое',
        veryPoor: 'Очень плохое',
      },
    },
    errors: {
      loading: 'Загрузка...',
      error: 'Ошибка загрузки данных',
      empty: 'Нет данных',
      noLocation: 'Не удалось определить местоположение',
      retry: 'Попробовать снова',
    },
  },
  en: {
    search: {
      placeholder: 'Search city...',
      noResults: 'City not found',
      currentLocation: 'Current location',
    },
    weather: {
      feelsLike: 'Feels like',
      wind: 'Wind',
      humidity: 'Humidity',
      pressure: 'Pressure',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      forecast: '5 Days Forecast',
      hourlyForecast: 'Hourly Forecast',
      airQuality: 'Air Quality',
      aqi: {
        good: 'Good',
        fair: 'Fair',
        moderate: 'Moderate',
        poor: 'Poor',
        veryPoor: 'Very Poor',
      },
    },
    errors: {
      loading: 'Loading...',
      error: 'Error loading data',
      empty: 'No data',
      noLocation: 'Failed to get location',
      retry: 'Retry',
    },
  },
};

export function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang] || translations.ru;

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      // fallback to Russian
      const fallback = translations.ru;
      value = keys.reduce((acc, keyPart) => acc?.[keyPart], fallback);
      return value || key;
    }
  }

  return value || key;
}
