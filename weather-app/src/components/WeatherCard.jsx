import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("")

    const {
        feels_like,
        temp,
        humidity,
        pressure,
        speed,
        weathermood,
        name,
        country,
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Haze":
                    setWeatherState("foggy");
                    break;
                case "Mist":
                    setWeatherState("foggy");
                    break;
                case "Clear":
                    setWeatherState("sun");
                    break;
                case "Clouds":
                    setWeatherState("cloud");
                    break;
                case "Smoke":
                    setWeatherState("foggy");
                    break;
                case "Dust":
                    setWeatherState("foggy");
                    break;
                case "Rain":
                    setWeatherState("rainy");
                    break;
                case "Thunderstorm":
                    setWeatherState("lightening");
                    break;
                default:
                    setWeatherState("foggy")
                    break;
            }
        }
    }, [weathermood])


    return (
        <>
            <div className="container">
                <div className="grid">
                    <div className="col">
                        <div className="location">
                            <h3>{name}, {country}</h3>
                        </div>
                        {/* <div className="time">
                            {new Date().toLocaleString()}
                        </div> */}
                    </div>
                    <div className="col">
                        <div className="temp">
                            <div>
                                <h2>{Math.round(temp)} ℃</h2>
                                <p>{weathermood}</p>
                            </div>
                            <img src={`./images/${weatherState}.png`} className='tempIcon' alt="" />
                        </div>
                    </div>
                </div>
                <div className="extraTempInfo">
                    <div className="box">
                        <div className="content">
                            <p className='infoHead'>
                                Feels Like <br /> <span>{Math.round(feels_like)} ℃</span>
                            </p>
                        </div>
                        <img src="./images/high-temperature.png" className='extraInfoIcon' alt="humidity" />
                    </div>
                    <div className="box">
                        <div className="content">
                            <p className='infoHead'>
                                Humidity <br /> <span>{humidity}</span>
                            </p>
                        </div>
                        <img src="./images/humidity.png" className='extraInfoIcon' alt="humidity" />
                    </div>
                    <div className="box">
                        <div className="content">
                            <p className='infoHead'>
                                Pressure <br /> <span>{pressure}</span>
                            </p>
                        </div>
                        <img src="./images/pressure.png" className='extraInfoIcon' alt="humidity" />
                    </div>
                    <div className="box">
                        <div className="content">
                            <p className='infoHead'>
                                Wind <br /> <span>{speed} km/h</span>
                            </p>
                        </div>
                        <img src="./images/wind.png" className='extraInfoIcon' alt="humidity" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard
