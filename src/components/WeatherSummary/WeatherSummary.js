import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({weather}) => {
    console.log(weather);
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt="weather icon"
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${weather ? weather.icon : ''}.png`} />
      <div className={styles.weatherInfo}>
        {weather && <h2>{weather.city}</h2>}
        <p>
          <strong>Temp:</strong> {weather ? weather.temp : ''}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;