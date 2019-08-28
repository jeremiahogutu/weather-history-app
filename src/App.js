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
        currentYear: '',
        longitude: '',
        latitude: '',
        timezone: '',
        currentTime: '',
        year: '',
        error: ''
    };

    currentUnixTime = (time) => {
        // 1 year has 31536000 seconds
        let secondsInYear = 31536000;
        let date = new Date((time - secondsInYear)*1000);
    }

    getWeatherHistory  = ()  => {

    };

    getCurrentWeather = async (e) => {
        e.preventDefault();

        const latitude = e.target.elements.latitude.value;
        const longitude = e.target.elements.longitude.value;
        const userForm = document.getElementById('userInput');
        userForm.reset();
        if (!latitude || !longitude) {
            this.setState({
                error: 'Please enter longitude and latitude values'
            });
            return false
        }

        const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude},2018-10-24T07:00:00`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            longitude: data.longitude,
            latitude: data.latitude,
            currentYear: data.currently,
            timezone: data.timezone,
            currentTime: data.currently.time,
            error: ''
        });

        this.getWeatherHistory()
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
                                <Form getCurrentWeather={this.getCurrentWeather}/>
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
