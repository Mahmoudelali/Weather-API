import React from 'react';

class TimeInstant extends React.Component {
	// constructor({props}) {
	// 	super(props);
	// }
	render() {
		return (
			<div className="time-instant">
				<time className="center block">{this.props.time}</time>
				<div className="instant-img-container" >
					{this.props.src}
				</div>
				<p className="instant-degree center">
					{this.props.degree}&deg;C
				</p>
			</div>
		);
	}
}

export default TimeInstant;
