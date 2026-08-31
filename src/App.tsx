import { useState } from 'react';


import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import Footer from './components/Footer'


function App() {
  const [city, setCity] = useState('');
  return (
    <>
      <h1>Whatever the Weather</h1>
      <p>Discover the weather. Experience the city.</p>

          <Header setCity={setCity} />

          <WeatherCard city={city} />

          <Forecast />

          <Footer />
    </>
  )
}

export default App