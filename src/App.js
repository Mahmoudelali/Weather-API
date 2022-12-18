import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import clear from './img/weather-icons/clear.svg';
import partlyCloudy from './img/weather-icons/partlycloudy.svg';
import finalDesign from './img/instructions/final-design.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mahmoud"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
                <form >
                    <input type="text" name="city" id="city"></input>
                    <input type="submit" name="submit" value={"FIND WEATHER"} id="submit"></input>
                </form>
            </header>
            
            <div className="content">
              
              <div className="overall-weather">
                <div className="overall-weather-img-container">

                   <img src={partlyCloudy}></img>
                </div>
                   <h1 className="center">overcast clouds</h1>
                   <p className="center"> <strong>Temperature </strong> 10&deg; to 11&deg;C</p>
                   <p className="center"> <strong>humidity </strong> 78% <strong>pressure </strong>1005.54</p>
              </div>

              <div className="during-the-day">
                  <div className="time-instant">
                    <time className="center block" >3:00</time>
                    <div className="instant-img-container">
                      <img  src={partlyCloudy} alt=""></img>
                    </div>
                    <p className="instant-degree center">33&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >6:00</time>
                    <div className="instant-img-container">
                      <img  src={partlyCloudy} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">33&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >9:00</time>
                    <div className="instant-img-container">
                      <img  src={partlyCloudy} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">33&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >12:00</time>
                    <div className="instant-img-container">
                      <img  src={clear} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">33&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >15:00</time>
                    <div className="instant-img-container">
                      <img  src={clear} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">13&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >18:00</time>
                    <div className="instant-img-container">
                      <img  src={clear} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">15&deg;C</p>
                  </div>

                  <div className="time-instant">
                    <time className="center block" >21:00</time>
                    <div className="instant-img-container">
                      <img  src={partlyCloudy} alt="weather image"></img>
                    </div>
                    <p className="instant-degree center">12&deg;C</p>
                  </div>
              </div>

            </div>
     </div>
    );
  }
}

export default App;
