import React from 'react';
import CurrentWeather from './CurrentWeather';
import TimeInstant from './TimeInstant';

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<CurrentWeather
					temperature={10}
					temperature_to={11}
					humidity={78}
					pressure={1134.53}
				/>
				<div className="during-the-day">
					<TimeInstant time={'3:00'} degree={'8'} />
					<TimeInstant time={'6:00'} degree={'9'} />
					<TimeInstant time={'9:00'} degree={'14'} />
					<TimeInstant time={'12:00'} degree={'17'} />
					<TimeInstant time={'15:00'} degree={'18'} />
					<TimeInstant time={'18:00'} degree={'16'} />
					<TimeInstant time={'21:00'} degree={'13'} />
				</div>
			</div>
		);
	}
}

export default Content;
