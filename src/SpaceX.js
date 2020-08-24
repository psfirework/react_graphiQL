import React, {Component, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LaunchList} from "./components/LaunchList";
import {DebounceInput} from 'react-debounce-input'
import index from './index.css'

const SPACE_X = gql`query($year: String){
    launchesPast(find: {launch_year: $year}) {
        mission_name
        launch_date_local
        launch_site {
            site_name_long
        }
        rocket {
            rocket_name
        }
        ships {
            name
            image
        }
    }
}
`;

export const SpaceXRequest = () => {
    const [inputYear, setYear] = useState('');
    const {data, loading, error} = useQuery(SPACE_X, {
        variables: {
            year: inputYear,
        }
    });

        const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    return loading ?
        <div className='loading'><div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div></div> :
        <div className='wrapper'>
            <div>
                <DebounceInput
                    minLength={4}
                    debounceTimeout={500}
                    onChange={handleYearChange} value={inputYear} type="text"
                               placeholder='Set the year, for example: 2010'/>
                </div>
                <div className='content'>
                        <LaunchList launchesArray={data.launchesPast} ></LaunchList>
                </div>
        </div>

};



