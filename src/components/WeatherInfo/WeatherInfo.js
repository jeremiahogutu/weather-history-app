import React from 'react';

const WeatherInfo = props => {
    return (
        <div>
            {props.latitude}
            {props.longitude}
            {props.temperature}
            {props.timezone}
            {props.humidity}
            {props.hour_summary}
            {props.icon}
        </div>
    );
};

export default WeatherInfo;
