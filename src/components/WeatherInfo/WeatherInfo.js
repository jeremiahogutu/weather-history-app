import React from 'react';

const WeatherInfo = props => {
    return (
        <div className='flex-center' >
            <div style={{minWidth: '200px'}}>
                {props.temperature && <h2 className='main-text'>{props.title}</h2>}
                {props.currentYear && <p className='main-text'>Current Year: <span className='secondary-text'>{props.currentYear}</span></p>}
                {props.temperature && <p className='main-text'>Temperature: <span className='secondary-text'>{props.temperature}</span></p>}
                {props.humidity && <p className='main-text'>Humidity: <span className='secondary-text'>{props.humidity}</span></p>}
                {props.visibility && <p className='main-text'>Visibility: <span className='secondary-text'>{props.visibility}</span></p>}
                {props.windSpeed && <p className='main-text'>windSpeed: <span className='secondary-text'>{props.windSpeed}</span></p>}
                {props.summary && <p className='main-text'>Summary: <span className='secondary-text'>{props.summary}</span></p>}
                {/*icon: {props.icon}*/}
            </div>
        </div>
    );
};

export default WeatherInfo;
