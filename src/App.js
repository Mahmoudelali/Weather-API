import React, { Component } from 'react';
import fakeWeatherData from './fakeWeatherData.json';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

// this has edited by me because the list length is 36 not as mentioned in readme
fakeWeatherData.list.length = 24;
// this has edited by me because the list length is 36 not as mentioned in readme

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'mahmoud',
		};
	}

	handleInputChange = (value) => {
		this.setState({ name: value });
	};

	render() {
    
		return (
			<div className="app">
				<Header />
				<Content weatherObject={fakeWeatherData} />
			</div>
		);
	}
}

export default App;
