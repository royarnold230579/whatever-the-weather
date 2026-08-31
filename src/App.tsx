import { useEffect, useState } from "react";

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

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

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
      });
  }, [city]);

  return (
    <>
      <h1>Whatever the Weather</h1>
      <p>Discover the weather. Experience the city.</p>

      <Header setCity={setCity} />

      <p>{error}</p>

      <WeatherCard weather={weather} />

      <Forecast />

      <Footer />
    </>
  );
}

export default App;