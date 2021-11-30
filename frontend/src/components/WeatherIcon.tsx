import React from 'react';

type Props = {
    icon: string;
};

//@see: https://openweathermap.org/weather-conditions
const WeatherIcon: React.FC<Props> = ({icon}) => {
  return (
    <img alt={icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
  );
}

export default WeatherIcon;
