import React, { Fragment } from 'react';
import 'weather-icons/css/weather-icons.css';
import PropTypes from 'prop-types';

const Layout = (weatherData) => {
	const {
		name,
		country,
		description,
		temp,
		feels_like,
		temp_max,
		temp_min,
		speed,
		deg,
		humidity,
		pressure,
		lat,
		lon,
		icon,
	} = weatherData.weatherData;

	return (
		<Fragment>
			<div>
				<div className='container'>
					<h3 className='py-2'>{`${name} , ${country}`}</h3>
					<i className={`wi ${icon} display-2 py-2`}></i>
					<h3 className='py-3'>{description}</h3>
					<h1>{`${temp}`}&deg;C</h1>
					<h4>{`${temp_min} | ${temp_max}`}</h4>
					<h6>{`Feels like: ${feels_like}`}&deg;C</h6>
					<h6>{`Wind: ${speed}m/s ${deg}`}&deg;</h6>
					<h6>{`Humidity: ${humidity}`}%</h6>
					<h6>{`Pressure: ${pressure} `}hPa</h6>
					<h6>
						{`Lat: ${lat}`}&deg;{` | Lon: ${lon}`}&deg;
					</h6>
				</div>
			</div>
		</Fragment>
	);
};

Layout.propTypes = {
	weatherData: PropTypes.object.isRequired,
};

export default Layout;
