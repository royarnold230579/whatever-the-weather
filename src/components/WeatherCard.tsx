type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
};

type WeatherCardProps = {
  weather: WeatherData | null;
};

function WeatherCard({ weather }: WeatherCardProps) {
  if (!weather) {
    return null;
  }

  return (
    <section className="weather-card">
      <div className="weather-main">
        <div>
          <h2>{weather.name}</h2>
          <p className="weather-description">
            {weather.weather[0].description}
          </p>
        </div>

        <p className="temperature">
          {Math.round(weather.main.temp)}°
        </p>
      </div>

      <div className="weather-details">
        <div className="weather-detail">
          <span>Feels like</span>
          <strong>{Math.round(weather.main.feels_like)}°C</strong>
        </div>

        <div className="weather-detail">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>

        <div className="weather-detail">
          <span>Wind</span>
          <strong>{weather.wind.speed} m/s</strong>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;