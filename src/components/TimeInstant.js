import React from 'react';

class TimeInstant extends React.Component {
	constructor({props}) {
		super(props);
	}
	
	render() {
		const {src , time , degree}= this.props
		return (
			<div className="time-instant">
				<time className="center block">{time}</time>
				<div className="instant-img-container" >
					{src}
				</div>
				<p className="instant-degree center">
					{degree}&deg;C
				</p>
			</div>
		);
	}
}

export default TimeInstant;
