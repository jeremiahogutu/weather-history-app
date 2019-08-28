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
        longitude: undefined,
        latitude: undefined,
        temperature: undefined,
        timezone: undefined,
        humidity: undefined,
        hour_summary: undefined,
        icon: undefined,
        error: ''
    };
    getWeather = async (e) => {
        e.preventDefault();

        const latitude = e.target.elements.latitude.value;
        const longitude = e.target.elements.longitude.value;
        document.getElementById('userInput').reset();


        const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            latitude: data.latitude,
            longitude: data.longitude,
            temperature: data.currently.temperature,
            timezone: data.currently.timezone,
            humidity: data.currently.humidity,
            hour_summary: data.hourly.summary,
            icon: data.currently.icon,
            error: ''
        })
    };

    render() {
        const {
            latitude, longitude, temperature,
            timezone, humidity, hour_summary,
            icon, error
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
                                    temperature={temperature}
                                    timezone={timezone}
                                    humidity={humidity}
                                    hour_summary={hour_summary}
                                    icon={icon}
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
