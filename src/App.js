import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = () => {
    return (
        <div className="App">
            <div className='weather-container'>
                <div className='weather-content'>
                    <Grid container>
                        <Grid item xs={12}>
                            <WeatherInfo/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default App;
