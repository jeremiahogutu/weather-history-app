import React from 'react';
import Skycons from 'react-skycons'

const WeatherInfo = props => {
    let iconName;
    if (props.icon) {
        iconName = props.icon.replace(/-/g, '_').toUpperCase();
    } else {
        iconName = undefined
    }
    return (
        <div className='flex-center' >
            <div style={{display: 'flex'}}>
                {props.temperature && <div className='icon-container'>
                    {props.icon &&
                    <Skycons
                        color='#00A7CE'
                        icon={iconName}
                        style={{height: '90px', width: 'auto'}}
                    />}
                </div>}
                {props.temperature && <div className='info-container' style={{minWidth: '200px'}}>
                     <h2 className='main-text'>{props.title}</h2>
                    {props.currentYear && <p className='main-text'>Current Year: <span className='secondary-text'>{props.currentYear}</span></p>}
                    {props.temperature && <p className='main-text'>Temperature: <span className='secondary-text'>{props.temperature}</span></p>}
                    {props.humidity && <p className='main-text'>Humidity: <span className='secondary-text'>{props.humidity}</span></p>}
                    {props.visibility && <p className='main-text'>Visibility: <span className='secondary-text'>{props.visibility}</span></p>}
                    {props.windSpeed && <p className='main-text'>windSpeed: <span className='secondary-text'>{props.windSpeed}</span></p>}
                    {props.summary && <p className='main-text'>Summary: <span className='secondary-text'>{props.summary}</span></p>}
                </div>}
            </div>
        </div>
    );
};

export default WeatherInfo;
