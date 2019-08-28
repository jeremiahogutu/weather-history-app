import React, {Component} from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

// Added to deal with cors errors when testing locally
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
    state = {
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


        const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: data.currently.temperature,
            timezone: data.currently.timezone,
            humidity: data.currently.humidity,
            hour_summary: data.hourly.summary,
            icon: data.currently.icon,
            error: ''
        })
    };

    render() {
        return (
            <div className="App">
                <div className='weather-container'>
                    <div className='weather-content'>
                        <Grid container>
                            <Grid item xs={12}>
                                <WeatherInfo getWeather={this.getWeather}/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
