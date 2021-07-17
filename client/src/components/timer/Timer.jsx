import React from 'react'
import Clock from 'react-live-clock';
import Moment from 'moment-timezone'
import './timer.css'

const Timer = () => {
    const showdate = new Date();
    const displaytodaysdate = showdate.getDate()+'/'+showdate.getMonth()
    +'/'+showdate.getFullYear();
    const dt = showdate.toDateString();
    
  return (
    <div>
      {dt} - <Clock format={'HH:mm:ss'} ticking={true} timezone={'GMT+3'} />
    </div>
  )
}

export default Timer



