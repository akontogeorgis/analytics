import React from 'react';
import bar_charts from "../styles/images/bar-chart.svg";
import eye from "../styles/images/eye.svg";
import buildings from "../styles/images/buildings.png";
import search from "../styles/images/search.svg";
import calendar from "../styles/images/calendar.svg";

function Navigation (){

    return (
        <React.Fragment>
            <div className="tabs_bar">
                <img src={bar_charts} className="bar_image" alt="bar"  /> <h2> Analytics</h2> <br/>
                <button type="button" className="tabs_buttons overview_tab"> <img src={eye} className="eye_image" alt="eye"/> <span> Overview </span></button>
                <button type="button" className="tabs_buttons"><img src={buildings} className="buildings_image" alt="buildings"/> <span> Metering Points </span></button>
                <button type="button" className="tabs_buttons"> <img src={search} className="search_image" alt="search"/> <span> Metering Point </span> </button>
                <button type="button" className="tabs_buttons"> <img src={calendar} className="calendar_image" alt="calendar"/> <span> Date Compare </span></button>
                <button type="button" className="tabs_buttons"><img src={bar_charts} className="stats_image" alt="stats"/> <span> Stats </span> </button>
            </div>

        </React.Fragment>

    );
}

export default Navigation;