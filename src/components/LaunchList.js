import React from 'react';
import {Launch} from "./Launch";

export const LaunchList = ({launchesArray}) => {
    console.log(launchesArray);

    return (
        <div>
            {launchesArray.map(launchElement => <Launch key={launchElement.mission_name} launch={launchElement}/>)}
        </div>
    )
}
