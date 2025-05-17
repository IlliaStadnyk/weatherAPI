import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import {useCallback, useState} from "react";
import ErrorBox from "../ErrorBox/ErrorBox";

const WeatherBox = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const APIkey = '6e3d542193231f0e22246cd445dc77de';
    const handleCityChange = useCallback((newCity) => {
        setError(false)
        setLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${APIkey}&units=metric`)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                    .then(data => {
                        const weatherData = {
                            city: data.name,
                            temp: data.main.temp,
                            icon: data.weather[0].icon,
                            description: data.weather[0].main
                        };
                        setWeather(weatherData)
                        setLoading(false);
                        console.log(data);
                    })
                }
                else {
                    setLoading(false);
                    setError(true)
                }
            })
    }, [])
  return (
    <section>
        <PickCity onSubmitCity={handleCityChange}/>
        {(!loading && weather) && <WeatherSummary weather={weather} />}
        {error && <ErrorBox/>}
        {loading && <Loader/>}
    </section>
  )
};

export default WeatherBox;