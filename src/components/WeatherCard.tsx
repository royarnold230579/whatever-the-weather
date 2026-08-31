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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>Wind speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;