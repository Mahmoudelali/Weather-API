import partlyCloudy from '../img/weather-icons/partlycloudy.svg';
import React from 'react';
class CurrentWeather extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="overall-weather">
				<div className="overall-weather-img-container">
					<img src={partlyCloudy}></img>
				</div>
				<h1 className="center">overcast clouds</h1>
				<p className="center">
					{' '}
					<strong>Temperature </strong> {this.props.temperature}&deg;
					to {this.props.temperature_to}&deg;C
				</p>
				<p className="center">
					{' '}
					<strong>humidity </strong> {this.props.humidity}%{' '}
					<strong>pressure </strong>
					{this.props.pressure}
				</p>
			</div>
		);
	}
}

export default CurrentWeather;
