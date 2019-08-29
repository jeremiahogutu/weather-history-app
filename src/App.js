import React, {Component} from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import Form from "./components/Form/Form";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

// Added to deal with cors errors when testing locally
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
    state = {
        longitude: '',
        latitude: '',
        currentYear: '',
        oneYearAgo: '',
        twoYearsAgo: '',
        threeYearsAgo: '',
        timezone: '',
        unixTime: '',
        year: '',
        error: ''
    };

    // oneYearBack() function returns the unix time minus one year
    oneYearBack = (time) => {
        // 1 year has 31536000 seconds
        let secondsInYear = 31536000;
        // subtract 1 year from the unix time that is passed in to the function
        let date = new Date((time - secondsInYear)*1000);
        // This will return the date a year ago in seconds (unix time)
        return date.getTime()/1000;
    };

    getWeather = async (e) => {
        e.preventDefault();
        const latitude = e.target.elements.latitude.value;
        const longitude = e.target.elements.longitude.value;
        const userForm = document.getElementById('userInput');
        let unixTime;
        userForm.reset();
        if (!latitude || !longitude) {
            this.setState({
                error: 'Please enter longitude and latitude values'
            });
            return false
        }

        if (!unixTime) {
            let date = new Date();
            // round unix time to the nearest minute
            unixTime = Math.round(date.getTime()/1000)
        }

        let yearsOfHistory = 3;
        let weatherHistoryArray = [];

        while (yearsOfHistory >= 0) {
            const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude},${unixTime}`);
            const data = await api_call.json();
            weatherHistoryArray.push(data);
            unixTime = this.oneYearBack(unixTime);
            yearsOfHistory--;
        }
        console.log(weatherHistoryArray);
        // console.log(data);
        this.setState({
            longitude: weatherHistoryArray[0].longitude,
            latitude: weatherHistoryArray[0].latitude,
            timezone: weatherHistoryArray[0].timezone,
            currentYear: weatherHistoryArray[0].currently,
            oneYearAgo: weatherHistoryArray[1].currently,
            twoYearsAgo: weatherHistoryArray[2].currently,
            threeYearsAgo: weatherHistoryArray[3].currently,
            error: ''
        });
    };



    render() {
        const {
            latitude, longitude,
            timezone, error, currentYear
        } = this.state;
        return (
            <div className="App">
                <div className='weather-container'>
                    <div className='weather-content'>
                        <Grid container>
                            <Grid item xs={12}>
                                <Form getWeather={this.getWeather}/>
                                <WeatherInfo
                                    longitude={longitude}
                                    latitude={latitude}
                                    temperature={currentYear.temperature}
                                    timezone={timezone}
                                    humidity={currentYear.humidity}
                                    summary={currentYear.summary}
                                    icon={currentYear.icon}
                                    error={error}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
