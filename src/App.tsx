import { useEffect, useState } from "react";

import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import Footer from './components/Footer'

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
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);  

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;
  
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [city]);

  return (
    <>
      <h1>Whatever the Weather</h1>
      <p>Discover the weather. Experience the city.</p>

          <Header setCity={setCity} />

          <WeatherCard weather={weather} />

          <Forecast />

          <Footer />
    </>
  )
}

export default App