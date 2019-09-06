import React, {Component} from 'react';
import './App.css';
import {Card, CardContent, Grid, CircularProgress} from '@material-ui/core';
import Form from "./components/Form/Form";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;

// Added to deal with cors errors when testing locally
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

let unixTime;

class App extends Component {
    state = {
        longitude: '',
        latitude: '',
        weatherHistory: [],
        timezone: '',
        unixTime: '',
        loading: false,
        error: ''
    };

    // oneYearBack() function returns the unix time minus one year
    oneYearBack = (time) => {
        // 1 year has 31536000 seconds
        let secondsInYear = 31536000;
        // subtract 1 year from the unix time that is passed in to the function
        let date = new Date((time - secondsInYear) * 1000);
        // This will return the date a year ago in seconds (unix time)
        return date.getTime() / 1000;
    };

    getWeather = async (e) => {
        e.preventDefault();
        const latitude = e.target.elements.latitude.value.trim();
        const longitude = e.target.elements.longitude.value.trim();
        const userForm = document.getElementById('userInput');
        userForm.reset();
        if (!latitude || !longitude) {
            this.setState({
                error: 'Please enter longitude and latitude values'
            });
            return false
        } else {
            this.setState({
                loading: true,
                error: ''
            });
        }

        if (!unixTime) {
            let date = new Date();
            // round unix time to the nearest second
            unixTime = Math.round(date.getTime() / 1000);
            this.setState({
                unixTime
            })
        }

        let yearsOfHistory = 3;
        let weatherHistoryArray = [];

        while (yearsOfHistory >= 0) {
            const api_call = await fetch(`${PROXY_URL}https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude},${unixTime}`);
            if (!api_call.ok) {
                this.setState({
                    longitude: '',
                    latitude: '',
                    weatherHistory: [],
                    timezone: '',
                    loading: false,
                    error: 'Please enter valid values for longitude and latitude'
                });
                return false
            }
            const data = await api_call.json();
            weatherHistoryArray.push(data);
            unixTime = this.oneYearBack(unixTime);
            yearsOfHistory--;
        }
        console.log(weatherHistoryArray);

        this.setState({
            longitude: weatherHistoryArray[0].longitude,
            latitude: weatherHistoryArray[0].latitude,
            timezone: weatherHistoryArray[0].timezone,
            weatherHistory: weatherHistoryArray,
            loading: false,
            error: ''
        });
    };


    render() {
        const {
            latitude, longitude, timezone,
            weatherHistory, error, loading,
            unixTime
        } = this.state;

        // New date Object
        const currentDate = new Date(unixTime*1000);

        return (
            <div className="App">
                <div className='weather-container'>
                    <div className='weather-content'>
                        <Card className='weather-card'>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={12} className='flex-center'
                                          style={{flexDirection: 'column', alignItems: 'center'}}>
                                        <Form getWeather={this.getWeather}/>
                                        <p className='danger-text'>{error}</p>
                                    </Grid>
                                    <Grid item xs={12} className='flex-center'>
                                        {loading && <CircularProgress/>}
                                    </Grid>
                                    {timezone && <Grid item xs={12} className='flex-center'>
                                        <div>
                                            <h2 className='main-text'>Location Information</h2>
                                            <p className='main-text'>Latitude: <span
                                                className='secondary-text'>{latitude}</span></p>
                                            <p className='main-text'>Longitude: <span
                                                className='secondary-text'>{longitude}</span></p>
                                            <p className='main-text'>Timezone: <span
                                                className='secondary-text'>{timezone}</span></p>
                                            <p className='main-text'>Current Time: <span
                                                className='secondary-text'>{currentDate.toLocaleTimeString()}</span></p>
                                        </div>
                                    </Grid>}
                                    {weatherHistory.map((weather, i) => (
                                        <Grid item xs={12} sm={6} md={6} key={i}>
                                            <WeatherInfo
                                                title={currentDate.getFullYear() - i}
                                                temperature={weather.currently.temperature}
                                                humidity={weather.currently.humidity}
                                                windSpeed={weather.currently.windSpeed}
                                                visibility={weather.currently.visibility}
                                                summary={weather.currently.summary}
                                                icon={weather.currently.icon}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
