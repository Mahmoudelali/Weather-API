import partlyCloudy from '../img/weather-icons/partlycloudy.svg';
import React from 'react';

class CurrentWeather extends React.Component {
	render() {
		const {description , temperature , humidity} = this.props
		return (
			<div className="overall-weather">
				<div className="overall-weather-img-container">
					<img src={partlyCloudy} alt={'weather status'}></img>
				</div>
				<h1 className="center">{description}</h1>
				<p className="center">
					{' '}
					<strong>Temperature </strong> {temperature}&deg;
					to {this.props.temperature_to}&deg;C
				</p>
				<p className="center">
					{' '}
					<strong>humidity </strong> {humidity}%{' '}
					<strong>pressure </strong>
					{this.props.pressure}
				</p>
			</div>
		);
	}
}

export default CurrentWeather;
