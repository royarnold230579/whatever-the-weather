import Header from './components/Header'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <h1>Whatever the Weather</h1>
      <p>Discover the weather. Experience the city.</p>

          <Header />

          <SearchBar />

          <WeatherCard />

          <Forecast />

          <Footer />
    </>
  )
}

export default App