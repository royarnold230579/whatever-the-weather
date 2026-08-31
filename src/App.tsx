import { useEffect, useState } from "react";
import londonBackground from "./assets/city-backgrounds/London.jpg";

import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

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

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }

        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch(() => {
        setWeather(null);
        setError("City not found");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8, 12, 20, 0.55), rgba(8, 12, 20, 0.7)),
          url(${londonBackground})
        `,
      }}
    >
      <section className="hero">
  <h1>Whatever the Weather</h1>
  <p>Discover the weather. Experience the city.</p>
</section>
      <Header setCity={setCity} />

      {loading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && weather && (
        <WeatherCard weather={weather} />
      )}

      <Forecast />

      <Footer />
    </div>
  );
}

export default App;