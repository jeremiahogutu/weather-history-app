import React from 'react';

const WeatherInfo = props => {
    return (
        <div>
            {props.latitude && props.longitude && <h2>Current Weather</h2>}
            {props.latitude && <p>Latitude: {props.latitude}</p>}
            {props.longitude && <p>Longitude: {props.longitude}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.timezone && <p>Timezone: {props.timezone}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.hour_summary && <p>Summary: {props.hour_summary}</p>}
            {/*icon: {props.icon}*/}
        </div>
    );
};

export default WeatherInfo;
