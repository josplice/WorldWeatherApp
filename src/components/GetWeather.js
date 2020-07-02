import React, { Fragment, useState, useEffect } from 'react';
import 'weather-icons/css/weather-icons.css';
import axios from 'axios';
import Layout from './Layout';
import Form from './Form';
import PropTypes from 'prop-types';
import Alert from './Alert';

const GetWeather = () => {
	const [weatherData, setWeatherData] = useState({});

	const [alert, setAlert] = useState(null);

	useEffect(() => {
		async function dataRetrieve() {
			const city = 'Boston';
			const res = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`,
			);

			weatherDisplay(res.data);
		}
		dataRetrieve();
		//eslint-disable-next-line
	}, []);

	const searchUser = async (text) => {
		try {
			const res = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=e9629992d0bde86eaddc6391f50171b7`,
			);

			weatherDisplay(res.data);
		} catch (error) {
			if (error) {
				setAlertMessage('City not on WorldWeather list');
			}
		}
	};

	const weatherDisplay = (result) => {
		const { name } = result;
		const { country } = result.sys;
		const { lat, lon } = result.coord;
		const {
			temp,
			temp_min,
			temp_max,
			feels_like,
			humidity,
			pressure,
		} = result.main;
		const { description, id } = result.weather[0];
		const { speed, deg } = result.wind;

		setWeatherData({
			name,
			country,
			id,
			description,
			temp: temp.toFixed(0),
			feels_like: feels_like.toFixed(0),
			temp_min: temp_min.toFixed(0),
			temp_max: temp_max.toFixed(0),
			speed,
			deg,
			humidity,
			pressure,
			lat: lat.toFixed(1),
			lon: lon.toFixed(1),
			icon: getWeatherIcon(id),
		});
		getWeatherIcon(id);
	};

	const getWeatherIcon = (rangeId) => {
		switch (true) {
			case rangeId >= 200 && rangeId <= 232:
				return 'wi-thunderstorm';

			case rangeId >= 300 && rangeId <= 321:
				return 'wi-sleet';

			case rangeId >= 500 && rangeId <= 531:
				return 'wi-storm-showers';

			case rangeId >= 600 && rangeId <= 622:
				return 'wi-snow';

			case rangeId >= 701 && rangeId <= 781:
				return 'wi-fog';

			case rangeId === 800:
				return 'wi-day-sunny';

			case rangeId >= 801 && rangeId <= 804:
				return 'wi-day-fog';

			default:
				return 'wi-day-fog';
		}
	};

	//set alert
	const setAlertMessage = (msg) => {
		setAlert({ msg });
		setTimeout(() => setAlert(null), 2000);
	};

	return (
		<Fragment>
			<div className='App'>
				<h2>WorldWeather</h2>
				<Form searchUser={searchUser} setAlertMessage={setAlertMessage} />
				<Alert alert={alert} />
				<Layout weatherData={weatherData} />
			</div>
		</Fragment>
	);
};

GetWeather.propType = {
	searchUser: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default GetWeather;
