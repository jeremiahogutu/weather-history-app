import React from 'react';

const WeatherInfo = props => {
    return (
        <div className='flex-center' >
            <div style={{minWidth: '200px'}}>
                {props.temperature && <h2>{props.title}</h2>}
                {props.currentYear && <p>Current Year: {props.currentYear}</p>}
                {props.temperature && <p>Temperature: {props.temperature}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.visibility && <p>Visibility: {props.visibility}</p>}
                {props.windSpeed && <p>windSpeed: {props.windSpeed}</p>}
                {props.summary && <p>Summary: {props.summary}</p>}
                {/*icon: {props.icon}*/}
            </div>
        </div>
    );
};

export default WeatherInfo;
