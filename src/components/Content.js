import React from 'react';
import CurrentWeather from './CurrentWeather';
import TimeInstant from './TimeInstant';

// images imports
import clear from '../img/weather-icons/clear.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import drizzle from '../img/weather-icons/drizzle.svg';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.props.items,
		};
	}

	render() {
		const {items} = this.props 
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
		{
			if (this.props.loaded) {
				return <div>Loading ...</div>;
			} else {
				return (
					<div className="content">
						<CurrentWeather
							description={
								items
									? items.list[0].weather[0]
											.description
									: null
							}
							temperature={Number(
								items
									?items.list[1].main.temp_min
									: null,
							).toFixed(0)}
							temperature_to={Number(
								items
									? items.list[2].main.temp_max
									: null,
							).toFixed(0)}
							humidity={Number(
								items
									? items.list[3].main.humidity
									: null,
							).toFixed(0)}
							pressure={Number(
								items
									? items.list[4].main.pressure
									: null,
							).toFixed(0)}
						/>

						<div className="during-the-day">
							<TimeInstant
								time={'03:00'}
								src={handleImageSetting(2)}
								degree={Number(
									items
										? items.list[1].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'06:00'}
								src={handleImageSetting(5)}
								degree={Number(
									items
										? items.list[2].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'09:00'}
								src={handleImageSetting(8)}
								degree={Number(
									items
										? items.list[3].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'12:00'}
								src={handleImageSetting(11)}
								degree={Number(
									items
										? items.list[4].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'15:00'}
								src={handleImageSetting(14)}
								degree={Number(
									items
										? items.list[5].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'18:00'}
								src={handleImageSetting(17)}
								degree={Number(
									items
										? items.list[6].main.temp
										: null,
								).toFixed(0)}
							/>
							<TimeInstant
								time={'21:00'}
								src={handleImageSetting(20)}
								degree={Number(
									items
										? items.list[7].main.temp
										: null,
								).toFixed(0)}
							/>
						</div>
					</div>
				);
			}
		}
	}
}

export default Content;
