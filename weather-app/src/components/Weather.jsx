import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const Weather = () => {

    const [cityValue, setCityValue] = useState("Andhra Pradesh");
    const [error, setError] = useState("")
    const [tempInfo, setTempInfo] = useState("");

    const apiKey = process.env.REACT_APP_API_KEY;

    const getWeatherByCity = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            const { feels_like, temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country } = data.sys;

            const getNewWeatherInfo = {
                feels_like,
                temp,
                humidity,
                pressure,
                speed,
                weathermood,
                name,
                country,
            };
            setTempInfo(getNewWeatherInfo)
        } catch (error) {
            // console.log(error);
            setError(`${cityValue} does not exits. Try Again !`)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }

    useEffect(() => {
        getWeatherByCity()
    }, []);

    const handleOnChange = (e) => {
        const value = e.target.value;
        setCityValue(value);
    }


    return (
        <>
            <div className={error ? "alert" : "alert-hide"}>
                <p>{error}</p>
            </div>
            <div className="main-container">
                <div className="main">
                    <div className="search-bar">
                            <input type="text" className='searchInp' placeholder='Enter location.'
                                value={cityValue}
                                onChange={handleOnChange} />
                            <button className='searchBtn' onClick={getWeatherByCity}>Search</button>
                    </div>
                    <WeatherCard tempInfo={tempInfo} />
                </div>
            </div >
        </>
    )
}

export default Weather
