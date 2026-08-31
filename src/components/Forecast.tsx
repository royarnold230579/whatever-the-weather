import { useEffect, useState } from "react";

type ForecastProps = {
  city: string;
};

type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
};

function Forecast({ city }: ForecastProps) {
  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const dailyForecasts = data.list
          .filter((item: ForecastItem) =>
            item.dt_txt.includes("12:00:00")
          )
          .slice(0, 5);

        setForecast(dailyForecasts);
      });
  }, [city]);

  return (
    <section className="forecast">
      <h2>5-Day Forecast</h2>

      <div className="forecast-grid">
        {forecast.map((item) => {
          const date = new Date(item.dt_txt);

          const day = date.toLocaleDateString("en-GB", {
            weekday: "short",
          });

          return (
            <div className="forecast-card" key={item.dt_txt}>
              <p className="forecast-day">{day}</p>

              <p className="forecast-temp">
                {Math.round(item.main.temp)}°
              </p>

              <p className="forecast-description">
                {item.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast;