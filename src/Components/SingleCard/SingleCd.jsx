import dayjs from 'dayjs';
import React from 'react'

const SingleCd = ({item, className, onClick}) => {

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const weekdayindex = dayjs.unix(item.dt).day()
  return (
    <>
    <li key={item.moonrise} className={className} onClick={onClick}>
        <img className="day-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="nitis" />
        <span className='day-name'>
                {WEEKDAYS[weekdayindex].slice(0,3)}
        </span>
        <span className="day-temp">{Math.round(item.temp.max)}°C</span>
    </li>
    </>
  )
}

export default SingleCd;