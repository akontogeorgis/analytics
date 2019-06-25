import React from 'react';

import Header from './components/header';
import Navigation from './components/navigation'
import ColumnChart from "./components/column_chart_component";
import PieChart from "./components/pie_chart_component";
import HeatMapChart from "./components/heatMap_chart_component";
import Consumption from "./components/consumption_component";

import './styles/css/index.css';

export default () => (
    <>
        <Header/>
        <Navigation/>
        <div className='content'>
            <ColumnChart/>
            <PieChart/>
            <HeatMapChart/>
            <Consumption/>
        </div>
    </>
);