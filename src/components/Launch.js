import React from 'react';
import {ImageTable} from "./ImageTable";
import moment from 'moment'
import launch from './launch.css'

export const Launch = ({launch}) => {
    const time = moment(launch.launch_date_local).format('MMMM Do YYYY, h:mm:ss a');
    return <div>
        <p><b>{launch.mission_name}</b></p>
        <p>{time}</p>
        <p>{launch.launch_site.site_name_long}</p>
        <p>{launch.rocket.rocket_name}</p>
        <div className='images'><ImageTable ships={launch.ships} /></div>
    </div>
};