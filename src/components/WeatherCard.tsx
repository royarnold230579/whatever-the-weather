type WeatherCardProps = {
    city: string;
  };

function WeatherCard({ city }: WeatherCardProps) {
    return (
        <h1>{city}</h1>
    )
  }
  
  export default WeatherCard