import React from 'react';

const WeatherInfo = props => {
    return (
        <div>

            {props.latitude && props.longitude && <h2>Current Weather</h2>}
            {props.currentYear && <p>Current Year: {props.currentYear}</p>}
            {props.latitude && <p>Latitude: {props.latitude}</p>}
            {props.longitude && <p>Longitude: {props.longitude}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.timezone && <p>Timezone: {props.timezone}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.summary && <p>Summary: {props.summary}</p>}
            {props.error && <p>Error: {props.error}</p>}
            {/*icon: {props.icon}*/}
        </div>
    );
};

export default WeatherInfo;
