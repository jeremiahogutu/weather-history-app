import React from 'react';
import {Card, CardContent, Button} from '@material-ui/core'

const WeatherInfo = () => {
    return (
        <Card className='weather-card'>
            <CardContent>
                <h3>Weather</h3>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </CardContent>
        </Card>
    );
};

export default WeatherInfo;
