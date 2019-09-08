import React from 'react';
import Skycons from 'react-skycons'

const WeatherInfo = ({title, ...weatherProps}) => {
    let iconName;
    if (weatherProps.icon) {
        iconName = weatherProps.icon.replace(/-/g, '_').toUpperCase();
    } else {
        iconName = undefined
    }
    return (
        <div className='flex-center'>
            <div style={{display: 'flex'}}>
                {weatherProps.temperature && <div className='icon-container'>
                    <Skycons
                        color='#00A7CE'
                        icon={iconName}
                        style={{height: '90px', width: 'auto'}}
                    />
                </div>}
                {weatherProps.temperature && <div className='info-container' style={{minWidth: '200px'}}>
                    <h2 className='main-text'>{title}</h2>
                    {Object.keys(weatherProps).map((key, index) => {
                        return <p key={index} className='main-text'>{`${key}: `} <span className='secondary-text'>{weatherProps[key]}</span></p>;
                    })}
                </div>}
            </div>
        </div>
    );
};

export default WeatherInfo;
