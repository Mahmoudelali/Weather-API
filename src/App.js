import React, { Component } from 'react';
import fakeWeatherData from './fakeWeatherData.json';
import './App.css';
import Content from './components/Content';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			location: 'tripoli',
			loaded: false,
		};
		this.searchClick = this.searchClick.bind(this);
	}

	searchClick(e) {
		fetch(
		`http://api.openweathermap.org/data/2.5/forecast?q=${e}&cnt=8&units=metric&appid=d64bfb248d8a87e2072162295cf0993f`,
	)
		.then((response) => response.json())
		.then((obtained) => {
			this.setState({
				data: obtained,
				loaded : !this.state.loaded
			});
			console.log(obtained)
		})
	
	}

	
	componentDidMount() {
		this.searchClick(this.state.location);
	}

	render() {
		const { data, input, loaded } = this.state;

		if (!loaded) {
			return (
				<header>
					<form>
						<input
							onChange={(e) =>
								this.setState({ input: e.target.value })
							}
							type={'text'}
						></input>

						<button
							className="search-weather"
							onClick={() => {
								this.searchClick(this.state.location);
							}}
						>
							Find Weather
						</button>
					</form>
				</header>
			);
		} else if (loaded) {
			return (
				<div className="app">
					<header>
						<form>
							<input
								onChange={(e) =>
									this.setState({ input: e.target.value })
								}
								type={'text'}
							></input>

							<button
								className="search-weather"
								onClick={(e) => {
									this.state.location = this.state.input;
									this.searchClick(this.state.location);
								}}
							>
								Find Weather
							</button>
						</form>
					</header>

					<Content
						weatherObject={fakeWeatherData}
						items={this.state.data ? this.state.data : null}
					/>
				</div>
			);
		}
	}
}

export default App;
