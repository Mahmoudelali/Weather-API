import React from 'react';

// import clear from "../img/weather-icons/clear.svg";
class Search extends React.Component {
	
	state = {
		input: '',
	};

	render() {
		return (
			<div>
				{this.state.input}
				<input
					type="text"
					id="input-name"
					// onChange={event => {
					//   this.setState({ input: event.target.value });
					// }}
				/>
				<button
					className="search-weather"
					onClick={(event) => {
						this.props.handleInput(this.state.input);
					}}
				>
					{this.props.btnValue}
				</button>
			</div>
		);
	}
}
export default Search;
