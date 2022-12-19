import React from 'react';
import CurrentWeather from './CurrentWeather';
import TimeInstant from './TimeInstant';

// images imports
import clear from '../img/weather-icons/clear.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import drizzle from '../img/weather-icons/drizzle.svg';

class Content extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const toCelsius = (index) => {
			return Number(
				this.props.weatherObject.list[index].main.temp - 273.15,
			).toFixed(1);
		};

		const handleImageSetting = (index) => {
			if (
				this.props.weatherObject.list[index].weather[0].description ===
				'clear sky'
			)
				return <img src={clear} alt={'clear sky weather'}></img>;
			else if (
				this.props.weatherObject.list[index].weather[0].description ===
				'broken clouds'
			)
				return <img src={cloudy} alt={'broken clouds'}></img>;
			else if (
				this.props.weatherObject.list[index].weather[0].description ===
				'light rain'
			)
				return <img src={drizzle} alt={'drizzle sky weather'}></img>;
			else if (
				this.props.weatherObject.list[index].weather[0].description ===
				'moderate rain'
			)
				return <img src={drizzle} alt={'drizzle sky weather'}></img>;
			else if (
				this.props.weatherObject.list[index].weather[0].description ===
				'few clouds'
			)
				return <img src={cloudy} alt={'cloudy sky weather'}></img>;
			else {
				return <img src={cloudy} alt={'cloudy sky weather'}></img>;
			}
		};

		return (
			<div className="content">
				<CurrentWeather
					description={
						this.props.weatherObject.list[0].weather[0].description
					}
					temperature={Number(
						this.props.weatherObject.list[0].main.temp_min - 273.15,
					).toFixed(1)}
					temperature_to={Number(
						this.props.weatherObject.list[0].main.temp_max - 273.15,
					).toFixed(1)}
					humidity={this.props.weatherObject.list[0].main.humidity}
					pressure={this.props.weatherObject.list[0].main.pressure}
				/>

				<div className="during-the-day">
					<TimeInstant
						time={'03:00'}
						src={handleImageSetting(2)}
						degree={toCelsius(2)}
					/>
					<TimeInstant
						time={'06:00'}
						src={handleImageSetting(5)}
						degree={toCelsius(5)}
					/>
					<TimeInstant
						time={'09:00'}
						src={handleImageSetting(8)}
						degree={toCelsius(8)}
					/>
					<TimeInstant
						time={'12:00'}
						src={handleImageSetting(11)}
						degree={toCelsius(11)}
					/>
					<TimeInstant
						time={'15:00'}
						src={handleImageSetting(14)}
						degree={toCelsius(14)}
					/>
					<TimeInstant
						time={'18:00'}
						src={handleImageSetting(17)}
						degree={toCelsius(17)}
					/>
					<TimeInstant
						time={'21:00'}
						src={handleImageSetting(20)}
						degree={toCelsius(20)}
					/>
				</div>
			</div>
		);
	}
}

export default Content;
