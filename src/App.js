import React, {Component} from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

// Added to deal with cors errors when testing locally
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`);
        const data = await api_call.json();
        console.log(data);
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
