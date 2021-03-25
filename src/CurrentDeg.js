import React, { Component } from 'react';
import clear from "./images/weather-icons/clear.svg";
import cloudy from "./images/weather-icons/cloudy.svg";
import drizzle from "./images/weather-icons/drizzle.svg";
import fog from "./images/weather-icons/fog.svg";
import mostlycloudy from "./images/weather-icons/mostlycloudy.svg";
import partlycloudy from "./images/weather-icons/partlycloudy.svg";
import rain from "./images/weather-icons/rain.svg";
import snow from "./images/weather-icons/snow.svg";
import storm from "./images/weather-icons/storm.svg";
import unknown from "./images/weather-icons/unknown.svg";

class CurrentDeg extends Component {
    render() {
        return (
            <div className="pic1">
                <img src={storm} alt="storm-img" />
                <div id="below-pic">
                    <p id="p1">Hello </p>
                    <p id="p2">Hello 1</p>
                    <p id="p3">Hello 2</p>
                </div>
            </div>

        );

    }
}
export default CurrentDeg;